import dagre from "dagre";

export function layoutWithDagre(
  nodes: any[], 
  edges: any[],
  nodeDimensions: Map<string, { width: number; height: number }>,
  expandedNodes?: Set<string>
) {
  const dagreGraph = new dagre.graphlib.Graph();
  dagreGraph.setDefaultEdgeLabel(() => ({}));

  // LR = Left to Right
  // align: 'DL' helps anchor nodes toward the top-left rather than the center
  dagreGraph.setGraph({
    rankdir: "LR",
    nodesep: 10, 
    ranksep: 100,
    align: "DL", 
    marginx: 50,
    marginy: 50,
  });

  nodes.forEach((node) => {
    const dims = nodeDimensions.get(node.id) || { width: 180, height: 50 };
    dagreGraph.setNode(node.id, { 
      width: dims.width, 
      height: dims.height 
    });
  });

  edges.forEach((edge) => {
    dagreGraph.setEdge(edge.source, edge.target);
  });

  dagre.layout(dagreGraph);

  // Calculate the bounds to normalize to (0,0)
  // React Flow positions from top-left, Dagre positions from center
  const nodeValues = nodes.map(n => dagreGraph.node(n.id));
  const minX = Math.min(...nodeValues.map(pos => pos.x - pos.width / 2));
  const minY = Math.min(...nodeValues.map(pos => pos.y - pos.height / 2));

  return nodes.map((node) => {
    const pos = dagreGraph.node(node.id);

    return {
      ...node,
      position: {
        x: (pos.x - pos.width / 2) - minX,
        y: (pos.y - pos.height / 2) - minY,
      },
    };
  });
}