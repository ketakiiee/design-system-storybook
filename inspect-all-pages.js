const fs = require('fs');
const figma = JSON.parse(fs.readFileSync('figma-raw.json', 'utf8'));

figma.document.children.forEach(page => {
  console.log(`\n======================================================`);
  console.log(`PAGE: "${page.name}" (id: ${page.id}) - ${page.children ? page.children.length : 0} items`);
  console.log(`======================================================`);
  if (page.children) {
    page.children.forEach(child => {
      console.log(`[${child.type}] "${child.name}" (id: ${child.id})`);
      if (child.children) {
        child.children.forEach(sub => {
          console.log(`   └─ [${sub.type}] "${sub.name}" (id: ${sub.id})`);
          if (sub.children && sub.children.length > 0 && sub.children.length <= 10) {
            sub.children.forEach(subsub => {
              console.log(`        └─ [${subsub.type}] "${subsub.name}" (id: ${subsub.id})`);
            });
          }
        });
      }
    });
  }
});
