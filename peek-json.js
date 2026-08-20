const fs = require('fs');

['semantic-palette-figma.json', 'semantic-palette.json', 'sample.json', 'Artboard 1.json'].forEach(f => {
  try {
    const raw = fs.readFileSync(f, 'utf8');
    console.log(`=== ${f} === (length ${raw.length})`);
    console.log(raw.slice(0, 300));
  } catch (e) {
    console.log(`Could not read ${f}:`, e.message);
  }
});
