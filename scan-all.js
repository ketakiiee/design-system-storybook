const fs = require('fs');

const figma = JSON.parse(fs.readFileSync('figma-raw.json', 'utf8'));

console.log('====================================');
console.log('COMPONENTS & COMPONENT SETS DETAILED');
console.log('====================================');

figma.document.children.forEach(page => {
  console.log(`\n--------------------------------------------`);
  console.log(`PAGE: "${page.name}" (id: ${page.id})`);
  console.log(`--------------------------------------------`);
  
  function scan(node, depth = 0) {
    const indent = '  '.repeat(depth);
    const isComponent = node.type === 'COMPONENT';
    const isComponentSet = node.type === 'COMPONENT_SET';
    const isFrame = node.type === 'FRAME';
    const isInstance = node.type === 'INSTANCE';
    
    if (isComponent || isComponentSet || (isFrame && depth <= 1)) {
      console.log(`${indent}[${node.type}] "${node.name}" (id: ${node.id}) ${node.children ? `(${node.children.length} children)` : ''}`);
      if (node.boundVariables) {
        console.log(`${indent}   boundVariables:`, JSON.stringify(node.boundVariables));
      }
      if (node.componentPropertyDefinitions) {
        console.log(`${indent}   componentPropertyDefinitions:`, JSON.stringify(node.componentPropertyDefinitions));
      }
    }
    
    if (node.children) {
      node.children.forEach(c => scan(c, depth + 1));
    }
  }
  
  if (page.children) {
    page.children.forEach(c => scan(c, 0));
  }
});
