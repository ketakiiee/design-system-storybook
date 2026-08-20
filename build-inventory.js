const fs = require('fs');

const figma = JSON.parse(fs.readFileSync('figma-raw.json', 'utf8'));

console.log('=== FULL INVENTORY OF CANDIDATE COMPONENTS ===');

// We want to catalog:
// 1. All COMPONENT_SET nodes
// 2. All COMPONENT nodes (that are not inside a COMPONENT_SET)
// 3. Key design frames/widgets/components on Page 4 (node-id 2135-2), Page 3 (2105:2), AI Integration (2040:2), self_assessment (0:1)

const inventory = [];

figma.document.children.forEach(page => {
  function walk(node, parent = null) {
    if (node.type === 'COMPONENT_SET') {
      inventory.push({
        id: node.id,
        name: node.name,
        type: node.type,
        page: page.name,
        pageId: page.id,
        children: node.children ? node.children.map(c => ({ id: c.id, name: c.name, type: c.type, boundVariables: c.boundVariables })) : [],
        componentPropertyDefinitions: node.componentPropertyDefinitions,
        boundVariables: node.boundVariables,
        raw: node
      });
      return; // don't recurse into component set children individually as components
    }
    
    if (node.type === 'COMPONENT') {
      if (!parent || parent.type !== 'COMPONENT_SET') {
        inventory.push({
          id: node.id,
          name: node.name,
          type: node.type,
          page: page.name,
          pageId: page.id,
          componentPropertyDefinitions: node.componentPropertyDefinitions,
          boundVariables: node.boundVariables,
          raw: node
        });
      }
      return;
    }
    
    if (node.type === 'FRAME' && (
      node.name.startsWith('iPhone') ||
      node.name.startsWith('lucide/') ||
      node.name.startsWith('Icon/') ||
      node.name === 'Todo List' ||
      node.name === 'Search bar' ||
      node.name === 'Card' ||
      node.name.startsWith('Button') ||
      node.name === 'Auto layout button' ||
      node.name === 'Html → Body' ||
      node.name === 'AI RIDE ASSISTANCE' ||
      node.name === 'AI SAFETY GUARDIAN' ||
      node.name === 'AI EMERGENCY COMPANION' ||
      node.name === 'Shortcuts' ||
      node.name === 'Keyboard shortcuts' ||
      node.name === 'CURRENT USER JOURNEY MAP' ||
      node.name === 'PAIN POINT ANALYSIS' ||
      node.name === 'AI OPPORTUNITY FRAMEWORK' ||
      node.name === 'Key Metrics (Prior-Redesign)'
    )) {
      inventory.push({
        id: node.id,
        name: node.name,
        type: node.type,
        page: page.name,
        pageId: page.id,
        childrenCount: node.children ? node.children.length : 0,
        boundVariables: node.boundVariables,
        raw: node
      });
    }

    if (node.children) {
      node.children.forEach(c => walk(c, node));
    }
  }

  if (page.children) {
    page.children.forEach(c => walk(c, null));
  }
});

console.log(`Discovered ${inventory.length} design items/components:`);
inventory.forEach((item, idx) => {
  console.log(`${idx + 1}. [${item.type}] "${item.name}" (id: ${item.id}) [Page: ${item.page}]`);
});

fs.writeFileSync('inventory.json', JSON.stringify(inventory, null, 2));
