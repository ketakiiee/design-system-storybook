const fs = require('fs');

const figma = JSON.parse(fs.readFileSync('figma-raw.json', 'utf8'));
const baseTokens = JSON.parse(fs.readFileSync('base-palette-tokens.json', 'utf8'));
const foundationalTokens = JSON.parse(fs.readFileSync('foundational-tokens.json', 'utf8'));

// Build token map: variableId -> cssVarName & details
const tokenMap = {};

function traverseTokens(obj, prefix = '--uedp-') {
  for (const [key, value] of Object.entries(obj)) {
    if (value && typeof value === 'object') {
      if (value['$extensions'] && value['$extensions']['com.figma.variableId']) {
        const varId = value['$extensions']['com.figma.variableId'];
        const val = value['$value'];
        const type = value['$type'];
        // Format CSS variable name
        const cleanName = key.replace(/\s+/g, '-').toLowerCase();
        tokenMap[varId] = {
          name: cleanName,
          value: typeof val === 'object' && val.hex ? val.hex : val,
          type,
          raw: value
        };
      } else {
        traverseTokens(value, prefix);
      }
    }
  }
}

// Traverse base and foundational
function extractAllTokens(obj, currentPath = []) {
  const result = [];
  for (const [k, v] of Object.entries(obj)) {
    if (v && typeof v === 'object' && v['$extensions'] && v['$extensions']['com.figma.variableId']) {
      const varId = v['$extensions']['com.figma.variableId'];
      const cssVarName = '--uedp-' + [...currentPath, k].join('-').replace(/[\s\/_]+/g, '-').toLowerCase();
      let cssVal = v['$value'];
      if (typeof cssVal === 'object' && cssVal !== null) {
        if (cssVal.hex) {
          cssVal = cssVal.hex;
          if (cssVal.alpha !== undefined && cssVal.alpha < 1) {
            cssVal = `rgba(${Math.round(cssVal.components[0]*255)}, ${Math.round(cssVal.components[1]*255)}, ${Math.round(cssVal.components[2]*255)}, ${cssVal.alpha})`;
          }
        }
      } else if (typeof cssVal === 'number') {
        if (currentPath.includes('border radius') || currentPath.includes('spacing') || currentPath.includes('gap') || currentPath.includes('padding') || currentPath.includes('dimension') || currentPath.includes('width') || currentPath.includes('height')) {
          cssVal = `${cssVal}px`;
        }
      }
      result.push({
        path: [...currentPath, k],
        cssVarName,
        varId,
        type: v['$type'],
        value: cssVal,
        raw: v
      });
    } else if (v && typeof v === 'object' && !Array.isArray(v)) {
      result.push(...extractAllTokens(v, [...currentPath, k]));
    }
  }
  return result;
}

const allBaseTokens = extractAllTokens(baseTokens);
const allFoundationalTokens = extractAllTokens(foundationalTokens);
const allTokens = [...allBaseTokens, ...allFoundationalTokens];

console.log(`Total extracted base tokens: ${allBaseTokens.length}`);
console.log(`Total extracted foundational tokens: ${allFoundationalTokens.length}`);
console.log(`Total tokens combined: ${allTokens.length}`);

// Sample tokens:
console.log('\nSample Base Tokens:');
console.log(allBaseTokens.slice(0, 5));
console.log('\nSample Foundational Tokens:');
console.log(allFoundationalTokens.slice(0, 5));

// Check Figma boundVariables variable IDs vs token variable IDs
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

console.log(`\nFound ${figmaVariableIds.size} unique bound variable IDs in Figma document:`);
const tokenVarIds = new Set(allTokens.map(t => t.varId));
let matched = 0;
figmaVariableIds.forEach(id => {
  const match = allTokens.find(t => t.varId === id || id.endsWith(t.varId.replace('VariableID:', '')) || t.varId.endsWith(id));
  if (match) {
    matched++;
    console.log(`  Matched: ${id} -> ${match.cssVarName} (${match.value})`);
  } else {
    console.log(`  Unmatched: ${id}`);
  }
});
console.log(`Matched ${matched} / ${figmaVariableIds.size} Figma bound variables.`);
