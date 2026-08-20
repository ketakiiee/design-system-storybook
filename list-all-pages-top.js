const fs = require('fs');
const figma = JSON.parse(fs.readFileSync('figma-raw.json', 'utf8'));

figma.document.children.forEach(page => {
  console.log(`\n======================================================`);
  console.log(`PAGE: "${page.name}" (id: ${page.id}) - Total top-level nodes: ${page.children ? page.children.length : 0}`);
  console.log(`======================================================`);
  if (page.children) {
    page.children.forEach(c => {
      console.log(`[${c.type}] "${c.name}" (id: ${c.id}) (children: ${c.children ? c.children.length : 0})`);
    });
  }
});
