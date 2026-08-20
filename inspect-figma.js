const fs = require('fs');

const figma = JSON.parse(fs.readFileSync('figma-raw.json', 'utf8'));
const baseTokens = JSON.parse(fs.readFileSync('base-palette-tokens.json', 'utf8'));
const foundationalTokens = JSON.parse(fs.readFileSync('foundational-tokens.json', 'utf8'));

console.log('=== FIGMA OVERVIEW ===');
console.log('Name:', figma.name);
console.log('Last Modified:', figma.lastModified);
console.log('Pages:');
figma.document.children.forEach(p => {
  console.log(` - Page: "${p.name}" (id: ${p.id}), children count: ${p.children ? p.children.length : 0}`);
});

console.log('\n=== COMPONENT SETS ===');
if (figma.componentSets) {
  Object.entries(figma.componentSets).forEach(([id, cs]) => {
    console.log(` - ComponentSet: "${cs.name}" (id: ${id})`);
  });
}

console.log('\n=== COMPONENTS ===');
if (figma.components) {
  Object.entries(figma.components).forEach(([id, c]) => {
    console.log(` - Component: "${c.name}" (id: ${id}), componentSetId: ${c.componentSetId || 'none'}`);
  });
}

// Let's inspect Page 4 (node 2135:2) children and all other pages
figma.document.children.forEach(page => {
  console.log(`\n=== PAGE: "${page.name}" (${page.id}) ===`);
  if (page.children) {
    page.children.forEach(child => {
      console.log(`   [${child.type}] "${child.name}" (id: ${child.id})`);
      if (child.children && child.children.length > 0) {
        console.log(`     -> has ${child.children.length} sub-children`);
      }
    });
  }
});
