import fs from 'node:fs';
const dir='public/assets';
const files=fs.readdirSync(dir).filter(f=>f.endsWith('.png')&&!/ [23]\.png$/.test(f));
const full=['Gâteau Piment','Boulettes Dim Sum','Seafood Gratin','Bol Renversé','Cari Ourite','Mauritian Chicken Biryani','Poudine Maïs','Bananes Flambées','Napolitaine','Alouda Milkshake','Bois Chéri Vanilla Tea','Rhum Arrangé'];
const extra=files.filter(f=>!full.includes(f.slice(0,-4)));
fs.writeFileSync('src/extras.json',JSON.stringify(extra,null,2));
console.log(extra.length,extra);
