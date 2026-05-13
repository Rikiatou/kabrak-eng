import sharp from 'sharp';

// Image is 1536x1024, K+text is roughly centered: x:380-1150, y:100-750
await sharp('./public/logo-kabrakeng-new.png')
  .extract({ left: 380, top: 100, width: 770, height: 650 })
  .png()
  .toFile('./public/logo-kabrakeng-trimmed.png');

console.log('Done!');
