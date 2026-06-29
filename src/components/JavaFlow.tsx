'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import {
  ReactFlow,
  Background,
  Controls,
  useReactFlow,
  ReactFlowProvider,
} from '@xyflow/react';

import '@xyflow/react/dist/style.css';

import { javaBackendTree } from '../data/javaBackendTree';
import { convertTreeToFlow } from '../utils/convertTreeToFlow';
import { layoutWithDagre } from '../utils/layoutWithDagre';

const darkNeonColors = ['#60a5fa', '#34d399', '#fbbf24', '#f87171', '#a78bfa', '#38bdf8', '#fb7185', '#4ade80'];
const lightNeonColors = ['#86efac', '#7ee8ff', '#f0abfc', '#fcd34d', '#fbcfe8', '#93c5fd', '#d8b4fe', '#fed7aa'];

function getNeonColor(nodeId: string, isDark: boolean = true): string {
  const depth = nodeId.split('-').length - 1;
  return (isDark ? darkNeonColors : lightNeonColors)[depth % 8];
}

function getNodeDimensions(label: string, isCode = false) {
  const lines = label.split('\n');
  const maxLineLength = Math.max(...lines.map(l => l.length));

  const maxWidth = isCode ? 600 : 320;

  const width = Math.max(140, Math.min(maxLineLength * 7 + 40, maxWidth));
  const height = Math.max(50, lines.length * 15 + 24);

  return { width, height };
}

function getSubtreeIds(id: string, edges: any[]): string[] {
  const result: string[] = [id];
  const queue = [id];
  while (queue.length > 0) {
    const current = queue.shift()!;
    const children = edges.filter((e) => e.source === current).map((e) => e.target);
    result.push(...children);
    queue.push(...children);
  }
  return result;
}

// Helper function to search through the tree recursively
function searchInTree(node: any, query: string, path = "0", results: string[] = []): string[] {
  const id = path;

  if (node.name.toLowerCase().includes(query.toLowerCase())) {
    results.push(id);
  }

  if (node.children) {
    node.children.forEach((child: any, i: number) => {
      searchInTree(child, query, `${id}-${i}`, results);
    });
  }

  return results;
}

function buildStyledNodes(
  layoutedNodes: any[],
  isDark: boolean,
  searchResults: string[],
  currentSearchIndex: number
) {
  return layoutedNodes.map((node) => {
    const color = getNeonColor(node.id, isDark);
    const isCodeNode =
      node.data.label.includes("class") ||
      node.data.label.includes("System.out") ||
      node.data.label.includes(";");

    const nodeDims = getNodeDimensions(node.data.label, isCodeNode);

    // Check if this node is in search results
    const searchResultIndex = searchResults.indexOf(node.id);
    const isSearchResult = searchResultIndex !== -1;
    const isCurrentSearchResult = searchResultIndex === currentSearchIndex;

    // Highlight current search result differently
    let borderColor = color;
    let borderWidth = 2;
    let boxShadow = isDark
      ? `0 0 20px ${color}60, 0 4px 15px rgba(0,0,0,0.6)`
      : `0 2px 8px rgba(0,0,0,0.08)`;

    if (isCurrentSearchResult) {
      borderColor = '#ff6b00'; // Orange for current result
      borderWidth = 3;
      boxShadow = isDark
        ? `0 0 30px #ff6b0080, 0 0 15px #ff6b00, 0 4px 15px rgba(0,0,0,0.6)`
        : `0 0 20px #ff6b0060, 0 2px 8px rgba(0,0,0,0.15)`;
    } else if (isSearchResult) {
      borderColor = '#fbbf24'; // Yellow for other results
      borderWidth = 2.5;
      boxShadow = isDark
        ? `0 0 25px #fbbf2460, 0 4px 15px rgba(0,0,0,0.6)`
        : `0 0 15px #fbbf2440, 0 2px 8px rgba(0,0,0,0.1)`;
    }

    return {
      ...node,
      style: {
        background: isDark ? color + '15' : color + '20',
        color: isDark ? '#ffffff' : '#1e293b',
        fontWeight: 600,
        fontSize: '12px',
        padding: '12px 16px',
        borderRadius: '10px',
        border: `${borderWidth}px solid`,
        borderColor,
        boxShadow,
        cursor: 'pointer',
        width: nodeDims.width,
        height: nodeDims.height,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'left',
        fontFamily: isCodeNode ? 'monospace' : "'Inter', sans-serif",
        whiteSpace: 'pre-wrap',
        transition: 'all 0.3s ease',
      },
    };
  });
}

function buildStyledEdges(rawEdges: any[], selectedNode: string | null, isDark: boolean) {
  return rawEdges.map((edge) => {
    const neonColor = getNeonColor(edge.source, isDark);
    const isConnected = selectedNode && (edge.source === selectedNode || edge.target === selectedNode);
    return {
      ...edge,
      style: {
        stroke: neonColor,
        strokeWidth: isConnected ? 3 : 2.5,
        opacity: isConnected ? 1 : (isDark ? 0.5 : 0.6),
      },
      animated: !!isConnected,
      markerEnd: { type: 'arrowclosed', color: neonColor },
    };
  });
}

function JavaFlowInner() {
  const [expanded, setExpanded] = useState<Set<string>>(new Set(['0']));
  const [selectedNode, setSelectedNode] = useState<string | null>(null);
  const [isDark, setIsDark] = useState(true);
  const [nodes, setNodes] = useState<any[]>([]);
  const [edges, setEdges] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // Search feature state
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<string[]>([]);
  const [currentSearchIndex, setCurrentSearchIndex] = useState(0);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const searchInputRef = useRef<HTMLInputElement>(null);

  const { fitView } = useReactFlow();

  useEffect(() => {
    setIsLoading(false);
  }, []);

  // Keyboard shortcut for search (Ctrl+F or Cmd+F)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'f') {
        e.preventDefault();
        setIsSearchOpen(true);
        setTimeout(() => searchInputRef.current?.focus(), 100);
      }
      if (e.key === 'Escape' && isSearchOpen) {
        setIsSearchOpen(false);
        setSearchQuery('');
        setSearchResults([]);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isSearchOpen]);

  // Perform search
  useEffect(() => {
    if (searchQuery.trim() === '') {
      setSearchResults([]);
      setCurrentSearchIndex(0);
      return;
    }

    const results = searchInTree(javaBackendTree, searchQuery);
    setSearchResults(results);
    setCurrentSearchIndex(0);

    // Auto-expand and focus on first result
    if (results.length > 0) {
      expandAndFocusNode(results[0]);
    }
  }, [searchQuery]);

  const expandAndFocusNode = useCallback((nodeId: string) => {
    // Expand all parent nodes
    const pathParts = nodeId.split('-');
    const newExpanded = new Set(expanded);

    for (let i = 0; i < pathParts.length; i++) {
      const ancestorPath = pathParts.slice(0, i + 1).join('-');
      newExpanded.add(ancestorPath);
    }

    setExpanded(newExpanded);

    // Focus on the node after expansion
    setTimeout(() => {
      fitView({
        nodes: [{ id: nodeId }],
        duration: 500,
        padding: 0.3,
      });
    }, 100);
  }, [expanded, fitView]);

  const navigateSearch = useCallback((direction: 'next' | 'prev') => {
    if (searchResults.length === 0) return;

    let newIndex;
    if (direction === 'next') {
      newIndex = (currentSearchIndex + 1) % searchResults.length;
    } else {
      newIndex = (currentSearchIndex - 1 + searchResults.length) % searchResults.length;
    }

    setCurrentSearchIndex(newIndex);
    expandAndFocusNode(searchResults[newIndex]);
  }, [searchResults, currentSearchIndex, expandAndFocusNode]);

  useEffect(() => {
    if (isLoading) return;
    const result = convertTreeToFlow(javaBackendTree, expanded);
    const dims = new Map<string, { width: number; height: number }>();
    result.nodes.forEach((node) => dims.set(node.id, getNodeDimensions(node.data.label)));
    const layoutedNodes = layoutWithDagre(result.nodes, result.edges, dims, expanded);
    setNodes(buildStyledNodes(layoutedNodes, isDark, searchResults, currentSearchIndex));
    setEdges(buildStyledEdges(result.edges, selectedNode, isDark));
  }, [expanded, isDark, isLoading, selectedNode, searchResults, currentSearchIndex]);

  const onNodeClick = useCallback(
    (_: any, node: any) => {
      const clickedId = node.id;
      const clickedDepth = clickedId.split('-').length;

      // --- CASE 1: CLOSING A NODE (Focus back to Parent Context) ---
      if (selectedNode === clickedId) {
        const next = new Set(expanded);
        let freshResult = convertTreeToFlow(javaBackendTree, next);

        // 1. Remove clicked node and its children from state
        getSubtreeIds(clickedId, freshResult.edges).forEach(id => {
          if (id !== '0') next.delete(id);
        });

        // 2. Identify the Parent ID
        const idParts = clickedId.split('-');
        const parentId = idParts.length > 1 ? idParts.slice(0, -1).join('-') : '0';

        setExpanded(next);
        setSelectedNode(parentId);

        // 3. Camera: Focus on the Parent AND its remaining visible children
        setTimeout(() => {
          const postCollapseResult = convertTreeToFlow(javaBackendTree, next);
          const parentContextIds = getSubtreeIds(parentId, postCollapseResult.edges);

          fitView({
            nodes: parentContextIds.map((id) => ({ id })),
            duration: 700,
            padding: 0.25
          });
        }, 50);
        return;
      }

      // --- CASE 2: OPENING A NEW NODE (Accordion Logic) ---
      const next = new Set(expanded);
      const currentEdges = convertTreeToFlow(javaBackendTree, expanded).edges;

      Array.from(next).forEach((id) => {
        const depth = id.split('-').length;
        if (depth === clickedDepth && id !== '0') {
          next.delete(id);
          getSubtreeIds(id, currentEdges).forEach(childId => next.delete(childId));
        }
      });

      next.add(clickedId);
      setExpanded(next);
      setSelectedNode(clickedId);

      // Camera: Move to the newly opened branch
      setTimeout(() => {
        const freshResult = convertTreeToFlow(javaBackendTree, next);
        const subtreeIds = getSubtreeIds(clickedId, freshResult.edges);
        fitView({
          nodes: subtreeIds.map((id) => ({ id })),
          duration: 700,
          padding: 0.2
        });
      }, 100);
    },
    [expanded, selectedNode, fitView]
  );

  if (isLoading) return <div className="loading-screen">Loading Java Tree...</div>;

  return (
    <div style={{ width: '100%', height: '100%', background: isDark ? '#000' : '#fffbf0', position: 'relative' }}>
      {/* Top Controls */}
      <div style={{ position: 'absolute', top: '16px', right: '16px', zIndex: 10, display: 'flex', gap: '10px' }}>
        <button onClick={() => setIsSearchOpen(!isSearchOpen)} className="btn-ui">
          🔍 Search {isSearchOpen ? '▼' : '▶'}
        </button>
        <button onClick={() => setIsDark(!isDark)} className="btn-ui">{isDark ? '☀️ Light' : '🌙 Dark'}</button>
      </div>

      {/* Search Bar - VSCode Style */}
      {isSearchOpen && (
        <div className="search-container">
          <div className="search-row">
            <input
              ref={searchInputRef}
              type="text"
              className="search-input"
              placeholder="Find"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  navigateSearch(e.shiftKey ? 'prev' : 'next');
                }
              }}
            />

            {searchResults.length > 0 ? (
              <span className="search-count">
                {currentSearchIndex + 1} of {searchResults.length}
              </span>
            ) : searchQuery ? (
              <span className="search-count no-match">No results</span>
            ) : null}

            <div className="search-controls">
              <button
                className="nav-btn"
                onClick={() => navigateSearch('prev')}
                title="Previous match (Shift+Enter)"
                disabled={searchResults.length === 0}
              >
                ▲
              </button>
              <button
                className="nav-btn"
                onClick={() => navigateSearch('next')}
                title="Next match (Enter)"
                disabled={searchResults.length === 0}
              >
                ▼
              </button>
              <button
                className="close-btn"
                onClick={() => {
                  setIsSearchOpen(false);
                  setSearchQuery('');
                  setSearchResults([]);
                }}
                title="Close (Esc)"
              >
                ✕
              </button>
            </div>
          </div>
        </div>
      )}

      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodeClick={onNodeClick}
        nodesDraggable={false}
        nodesConnectable={false}
        elementsSelectable={true}
        edgesFocusable={false}
        fitView
        fitViewOptions={{ padding: 0.2 }}
      >
        <Background gap={20} size={0.5} color={isDark ? '#1a1f3a' : '#e2e8f0'} />
        <Controls showInteractive={false} />
      </ReactFlow>

      <style jsx>{`
        .btn-ui {
          background: ${isDark ? '#111827' : '#fff'};
          border: 1px solid ${isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)'};
          color: ${isDark ? '#e5e7eb' : '#111827'};
          padding: 10px 14px;
          border-radius: 10px;
          cursor: pointer;
          font-size: 13px;
          font-weight: 500;
          transition: all 0.2s ease;
        }
        .btn-ui:hover {
          background: ${isDark ? '#1f2937' : '#f3f4f6'};
        }
        
        .search-container {
          position: absolute;
          top: 60px;
          right: 16px;
          z-index: 10;
          background: #1e293b;
          border-radius: 8px;
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.4);
          overflow: hidden;
        }
        
        .search-row {
          display: flex;
          align-items: center;
          gap: 0;
          padding: 0;
        }
        
        .search-input {
          background: transparent;
          border: none;
          color: #e2e8f0;
          padding: 10px 12px;
          font-size: 13px;
          outline: none;
          width: 200px;
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
        }
        
        .search-input::placeholder {
          color: #64748b;
        }
        
        .search-count {
          color: #94a3b8;
          font-size: 11px;
          font-weight: 500;
          padding: 0 12px;
          white-space: nowrap;
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
        }
        
        .search-count.no-match {
          color: #ef4444;
        }
        
        .search-controls {
          display: flex;
          align-items: center;
          gap: 0;
          border-left: 1px solid #334155;
        }
        
        .nav-btn, .close-btn {
          background: transparent;
          border: none;
          color: #cbd5e1;
          padding: 10px 12px;
          cursor: pointer;
          font-size: 11px;
          font-weight: 600;
          transition: all 0.15s ease;
          display: flex;
          align-items: center;
          justify-content: center;
          border-right: 1px solid #334155;
        }
        
        .nav-btn:last-of-type {
          border-right: none;
        }
        
        .nav-btn:hover:not(:disabled), .close-btn:hover {
          background: #334155;
          color: #fff;
        }
        
        .nav-btn:active:not(:disabled), .close-btn:active {
          background: #475569;
        }
        
        .nav-btn:disabled {
          opacity: 0.4;
          cursor: not-allowed;
        }
        
        .close-btn {
          border-right: none;
          font-size: 14px;
        }
        
        .loading-screen {
          width: 100%; 
          height: 100%; 
          display: flex; 
          align-items: center; 
          justify-content: center;
          background: ${isDark ? '#000' : '#fffbf0'}; 
          color: ${isDark ? '#fff' : '#000'};
        }
      `}</style>
    </div>
  );
}

export default function JavaFlow() {
  return (
    <ReactFlowProvider>
      <JavaFlowInner />
    </ReactFlowProvider>
  );
}