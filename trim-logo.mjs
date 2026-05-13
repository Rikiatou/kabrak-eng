import sharp from 'sharp';

// Trim whitespace/transparent borders automatically
await sharp('./public/logo-kabrakeng-new.png')
  .trim({ background: '#ffffff', threshold: 40 })
  .png()
  .toFile('./public/logo-kabrakeng.png');

console.log('Done! Trimmed logo saved.');
