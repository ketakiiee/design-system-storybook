import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const basePalettePath = path.resolve(__dirname, '../../base-palette-tokens.json');
const foundationalTokensPath = path.resolve(__dirname, '../../foundational-tokens.json');

const basePalette = JSON.parse(fs.readFileSync(basePalettePath, 'utf8'));
const foundationalTokens = JSON.parse(fs.readFileSync(foundationalTokensPath, 'utf8'));

const cssVariables = [];
const tokenMetadata = {
  colors: {},
  foundational: {
    borderRadius: {},
    gap: {},
    padding: {},
    opacity: {},
    maxWidth: {}
  },
  variableIdMap: {}
};

// Process Base Palette
for (const [family, shades] of Object.entries(basePalette)) {
  if (family === '$extensions') continue;
  tokenMetadata.colors[family] = {};
  
  for (const [shade, data] of Object.entries(shades)) {
    if (shade.startsWith('$')) continue;
    if (!data || typeof data !== 'object') continue;
    
    let hexValue = '#000000';
    if (data['$value']) {
      if (typeof data['$value'] === 'string') {
        hexValue = data['$value'];
      } else if (data['$value'].hex) {
        hexValue = data['$value'].hex;
      }
    }
    
    const varId = data['$extensions']?.['com.figma.variableId'] || '';
    let cssVarName = '';
    
    if (family === 'base') {
      cssVarName = `--uedp-${shade}`;
    } else {
      cssVarName = `--uedp-${family}-${shade}`;
    }
    
    cssVariables.push(`  ${cssVarName}: ${hexValue};`);
    tokenMetadata.colors[family][shade] = {
      cssVar: cssVarName,
      value: hexValue,
      varId
    };
    
    if (varId) {
      tokenMetadata.variableIdMap[varId] = {
        cssVar: cssVarName,
        value: hexValue,
        type: 'color',
        family,
        shade
      };
    }
  }
}

// Process Foundational Tokens
// Border Radius: rounded-3xl -> --uedp-rounded-3xl: 24px
if (foundationalTokens['border radius']) {
  for (const [key, data] of Object.entries(foundationalTokens['border radius'])) {
    if (key.startsWith('$')) continue;
    const val = `${data['$value']}px`;
    const varId = data['$extensions']?.['com.figma.variableId'] || '';
    const cssVarName = `--uedp-${key}`;
    
    cssVariables.push(`  ${cssVarName}: ${val};`);
    tokenMetadata.foundational.borderRadius[key] = {
      cssVar: cssVarName,
      value: val,
      varId
    };
    if (varId) {
      tokenMetadata.variableIdMap[varId] = {
        cssVar: cssVarName,
        value: val,
        type: 'borderRadius',
        key
      };
    }
  }
}

// Gap: gap-4 -> --uedp-gap-4: 16px
if (foundationalTokens['gap']) {
  for (const [key, data] of Object.entries(foundationalTokens['gap'])) {
    if (key.startsWith('$')) continue;
    const formattedKey = key.replace(',', '.');
    const val = `${data['$value']}px`;
    const varId = data['$extensions']?.['com.figma.variableId'] || '';
    const cssVarName = `--uedp-${formattedKey.replace('.', '-')}`;
    
    cssVariables.push(`  ${cssVarName}: ${val};`);
    tokenMetadata.foundational.gap[key] = {
      cssVar: cssVarName,
      value: val,
      varId
    };
    if (varId) {
      tokenMetadata.variableIdMap[varId] = {
        cssVar: cssVarName,
        value: val,
        type: 'gap',
        key
      };
    }
  }
}

// Padding: p-6 -> --uedp-padding-6: 24px and --uedp-p-6: 24px
if (foundationalTokens['padding']) {
  for (const [key, data] of Object.entries(foundationalTokens['padding'])) {
    if (key.startsWith('$')) continue;
    const numPart = key.replace('p-', '').replace(',', '-');
    const val = `${data['$value']}px`;
    const varId = data['$extensions']?.['com.figma.variableId'] || '';
    const cssVarName1 = `--uedp-padding-${numPart}`;
    const cssVarName2 = `--uedp-${key.replace(',', '-')}`;
    
    cssVariables.push(`  ${cssVarName1}: ${val};`);
    cssVariables.push(`  ${cssVarName2}: ${val};`);
    tokenMetadata.foundational.padding[key] = {
      cssVar: cssVarName1,
      cssVarAlias: cssVarName2,
      value: val,
      varId
    };
    if (varId) {
      tokenMetadata.variableIdMap[varId] = {
        cssVar: cssVarName1,
        value: val,
        type: 'padding',
        key
      };
    }
  }
}

// Opacity: opacity-50 -> --uedp-opacity-50: 0.5
if (foundationalTokens['opacity']) {
  for (const [key, data] of Object.entries(foundationalTokens['opacity'])) {
    if (key.startsWith('$')) continue;
    const val = (data['$value'] / 100).toString();
    const varId = data['$extensions']?.['com.figma.variableId'] || '';
    const cssVarName = `--uedp-${key}`;
    
    cssVariables.push(`  ${cssVarName}: ${val};`);
    tokenMetadata.foundational.opacity[key] = {
      cssVar: cssVarName,
      value: val,
      varId
    };
    if (varId) {
      tokenMetadata.variableIdMap[varId] = {
        cssVar: cssVarName,
        value: val,
        type: 'opacity',
        key
      };
    }
  }
}

// Max-W: max-w-md -> --uedp-max-w-md: 448px
if (foundationalTokens['max-w']) {
  for (const [key, data] of Object.entries(foundationalTokens['max-w'])) {
    if (key.startsWith('$')) continue;
    const val = `${data['$value']}px`;
    const varId = data['$extensions']?.['com.figma.variableId'] || '';
    const cssVarName = `--uedp-${key}`;
    
    cssVariables.push(`  ${cssVarName}: ${val};`);
    tokenMetadata.foundational.maxWidth[key] = {
      cssVar: cssVarName,
      value: val,
      varId
    };
    if (varId) {
      tokenMetadata.variableIdMap[varId] = {
        cssVar: cssVarName,
        value: val,
        type: 'maxWidth',
        key
      };
    }
  }
}

const cssContent = `/* Figma Design System Tokens - Auto-generated from base-palette-tokens.json & foundational-tokens.json */
:root {
${cssVariables.join('\n')}
}
`;

const cssOutputPath = path.resolve(__dirname, '../src/styles/figma-tokens.css');
fs.writeFileSync(cssOutputPath, cssContent, 'utf8');

const metaOutputPath = path.resolve(__dirname, '../src/styles/tokens-metadata.json');
fs.writeFileSync(metaOutputPath, JSON.stringify(tokenMetadata, null, 2), 'utf8');

console.log(`Generated ${cssVariables.length} CSS variables in ${cssOutputPath}`);
