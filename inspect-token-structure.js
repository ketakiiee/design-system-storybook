const fs = require('fs');
const baseTokens = JSON.parse(fs.readFileSync('base-palette-tokens.json', 'utf8'));
const foundationalTokens = JSON.parse(fs.readFileSync('foundational-tokens.json', 'utf8'));

console.log('=== FOUNDATIONAL TOKEN KEYS ===');
console.log(Object.keys(foundationalTokens));

for (const [category, items] of Object.entries(foundationalTokens)) {
  console.log(`\nCategory: "${category}"`);
  console.log('Keys:', Object.keys(items).slice(0, 10));
  const firstKey = Object.keys(items)[0];
  console.log(`Sample item [${firstKey}]:`, items[firstKey]);
}

console.log('\n=== BASE PALETTE TOKEN KEYS ===');
console.log(Object.keys(baseTokens));
for (const [colorFamily, shades] of Object.entries(baseTokens)) {
  console.log(`Color family: "${colorFamily}", shades:`, Object.keys(shades));
}
