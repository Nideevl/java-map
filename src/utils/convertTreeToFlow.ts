export function convertTreeToFlow(tree: any, expanded: Set<string>) {
  const nodes: any[] = [];
  const edges: any[] = [];

  const colors = [
    '#dbeafe',
    '#dcfce7',
    '#ffedd5',
    '#f3e8ff',
    '#ffe4e6',
  ];

  function traverse(node: any, path = "0", depth = 0, parentId?: string) {
    const id = path;

    nodes.push({
      id,
      data: { label: node.name },
      position: { x: 0, y: 0 },
      sourcePosition: 'right',
      targetPosition: 'left',

      style: {
        padding: '10px 14px',
        borderRadius: '12px',
        border: '1px solid #e2e8f0',
        background: colors[depth % colors.length],
        fontSize: '12px',
        fontWeight: 500,
        color: '#1e293b',
        width: 180,
        textAlign: 'center',
        boxShadow: '0 4px 10px rgba(0,0,0,0.15)',
      },
    });

    if (parentId) {
      edges.push({
        id: `${parentId}-${id}`,
        source: parentId,
        target: id,
        type: 'step',
        style: {
          stroke: '#64748b',
          strokeWidth: 1.5,
        },
      });
    }

    if (node.children && expanded.has(id)) {
      node.children.forEach((child: any, i: number) => {
        traverse(child, `${id}-${i}`, depth + 1, id);
      });
    }
  }

  traverse(tree);

  return { nodes, edges };
}