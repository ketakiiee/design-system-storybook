const fs = require('fs');
const figma = JSON.parse(fs.readFileSync('figma-raw.json', 'utf8'));

figma.document.children.forEach(page => {
  console.log(`\n======================================================`);
  console.log(`PAGE: "${page.name}" (id: ${page.id}) - ${page.children ? page.children.length : 0} top-level nodes`);
  console.log(`======================================================`);
  if (page.children) {
    page.children.forEach(child => {
      console.log(`[${child.type}] "${child.name}" (id: ${child.id})`);
    });
  }
});
