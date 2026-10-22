// The site is one static page, so "building" is copying it and public/ into dist/.
import { cpSync, rmSync, mkdirSync } from 'node:fs';

rmSync('dist', { recursive: true, force: true });
mkdirSync('dist');
cpSync('public', 'dist', { recursive: true });
cpSync('index.html', 'dist/index.html');
console.log('Built dist/');
