import fs from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';
const source=path.resolve('..');
const output=path.resolve('public/assets');
const files=(await fs.readdir(source)).filter(f=>f.endsWith('.png'));
for(const file of files){await sharp(path.join(source,file)).resize({width:1000,withoutEnlargement:true}).webp({quality:82}).toFile(path.join(output,file.replace(/\.png$/,'.webp')))}
console.log(`Optimized ${files.length} photos. Original assets preserved in parent directory.`);
