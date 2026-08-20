const fs = require('fs');

const files = [
  'base-palette-tokens.json',
  'foundational-tokens.json',
  'semantic-palette-figma.json',
  'genz-news-semantic-palette-figma.json',
  'semantic-palette.json',
  'sample.json',
  'Artboard 1.json'
];

const allVars = {};

files.forEach(file => {
  try {
    const data = JSON.parse(fs.readFileSync(file, 'utf8'));
    console.log(`Checking ${file}...`);
    
    function scanObj(obj, path = []) {
      for (const [k, v] of Object.entries(obj)) {
        if (v && typeof v === 'object') {
          if (v['$extensions'] && v['$extensions']['com.figma.variableId']) {
            const varId = v['$extensions']['com.figma.variableId'];
            allVars[varId] = {
              file,
              path: [...path, k].join('.'),
              value: v['$value'],
              type: v['$type']
            };
          } else {
            scanObj(v, [...path, k]);
          }
        }
      }
    }
    scanObj(data);
  } catch (e) {
    console.log(`Error reading ${file}:`, e.message);
  }
});

console.log(`Total unique variables across all token JSON files: ${Object.keys(allVars).length}`);

// Check against the 23 boundVariables from Figma
const figma = JSON.parse(fs.readFileSync('figma-raw.json', 'utf8'));
const figmaVariableIds = new Set();
function findBoundVars(node) {
  if (node.boundVariables) {
    for (const [prop, val] of Object.entries(node.boundVariables)) {
      if (Array.isArray(val)) {
        val.forEach(v => { if (v && v.id) figmaVariableIds.add(v.id); });
      } else if (val && typeof val === 'object') {
        if (val.id) figmaVariableIds.add(val.id);
        for (const [subk, subv] of Object.entries(val)) {
          if (subv && subv.id) figmaVariableIds.add(subv.id);
        }
      }
    }
  }
  if (node.children) {
    node.children.forEach(findBoundVars);
  }
}
findBoundVars(figma.document);

console.log('\nChecking Figma bound variables:');
figmaVariableIds.forEach(id => {
  if (allVars[id]) {
    console.log(`  MATCH: ${id} -> from ${allVars[id].file} : ${allVars[id].path} (${JSON.stringify(allVars[id].value)})`);
  } else {
    // Try matching without prefix or hash
    const matchKey = Object.keys(allVars).find(k => k.includes(id) || id.includes(k) || (id.split('/')[1] && k.endsWith(id.split('/')[1])));
    if (matchKey) {
      console.log(`  PARTIAL MATCH: ${id} ~ ${matchKey} -> ${allVars[matchKey].path}`);
    } else {
      console.log(`  NO MATCH: ${id}`);
    }
  }
});
