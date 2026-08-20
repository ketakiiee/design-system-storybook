const fs = require('fs');

const figma = JSON.parse(fs.readFileSync('figma-raw.json', 'utf8'));

const report = {
  name: figma.name,
  lastModified: figma.lastModified,
  pages: []
};

figma.document.children.forEach(page => {
  const pageInfo = {
    name: page.name,
    id: page.id,
    topLevelCount: page.children ? page.children.length : 0,
    topLevelNodes: []
  };
  
  if (page.children) {
    page.children.forEach(child => {
      pageInfo.topLevelNodes.push({
        id: child.id,
        name: child.name,
        type: child.type,
        childrenCount: child.children ? child.children.length : 0,
        componentPropertyDefinitions: child.componentPropertyDefinitions,
        boundVariables: child.boundVariables
      });
    });
  }
  
  report.pages.push(pageInfo);
});

fs.writeFileSync('figma-pages-report.json', JSON.stringify(report, null, 2), 'utf8');
console.log('Saved figma-pages-report.json successfully!');
