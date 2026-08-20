const fs = require('fs');
const figma = JSON.parse(fs.readFileSync('figma-raw.json', 'utf8'));

console.log('=== PAGE 4 (2135:2) & other key nodes ===');
const page4 = figma.document.children.find(p => p.id === '2135:2');
if (page4) {
  console.log('Page 4 Name:', page4.name);
  console.log('Children count:', page4.children.length);
  page4.children.forEach(c => {
    console.log(`\nChild [${c.type}] "${c.name}" (id: ${c.id})`);
    printTree(c, 1);
  });
}

function printTree(node, depth) {
  const indent = '  '.repeat(depth);
  console.log(`${indent}- [${node.type}] "${node.name}" (id: ${node.id}) ${node.boundVariables ? 'BV:' + Object.keys(node.boundVariables).join(',') : ''}`);
  if (node.children) {
    node.children.forEach(ch => printTree(ch, depth + 1));
  }
}
