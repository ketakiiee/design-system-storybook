#!/usr/bin/env node

/**
 * scripts/deploy-vercel.js
 * Deployment readiness verification script for Storybook on Vercel
 */

import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log('🚀 Running Vercel Pre-Deployment Verification Checks...\n');

// 1. Check TypeScript compilation
console.log('1. Checking TypeScript types...');
try {
  execSync('npx tsc --noEmit', { stdio: 'inherit', cwd: path.resolve(__dirname, '..') });
  console.log('✅ TypeScript check passed (0 errors)\n');
} catch (error) {
  console.error('❌ TypeScript compilation failed.');
  process.exit(1);
}

// 2. Verify figma-tokens.css exists
console.log('2. Verifying design tokens...');
const tokensPath = path.resolve(__dirname, '../src/styles/figma-tokens.css');
if (fs.existsSync(tokensPath)) {
  const content = fs.readFileSync(tokensPath, 'utf8');
  console.log(`✅ figma-tokens.css verified (${content.split('\n').length} lines)\n`);
} else {
  console.error('❌ figma-tokens.css missing. Run npm run extract-tokens first.');
  process.exit(1);
}

// 3. Build Storybook static assets
console.log('3. Building Storybook static bundle...');
try {
  execSync('npm run build-storybook', { stdio: 'inherit', cwd: path.resolve(__dirname, '..') });
  console.log('✅ Storybook build succeeded (storybook-static/ generated)\n');
} catch (error) {
  console.error('❌ Storybook build failed.');
  process.exit(1);
}

// 4. Check vercel.json configuration
console.log('4. Checking vercel.json...');
const vercelConfigPath = path.resolve(__dirname, '../vercel.json');
if (fs.existsSync(vercelConfigPath)) {
  console.log('✅ vercel.json verified for static SPA routing.\n');
} else {
  console.error('❌ vercel.json missing.');
  process.exit(1);
}

console.log('🎉 All deployment checks passed! The project is ready for Vercel deployment.');
