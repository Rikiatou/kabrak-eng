import sharp from 'sharp';

// Load the image, make white background transparent, save as PNG
const input = './public/logo-kabrakeng.jpeg';
const output = './public/logo-kabrakeng.png';

const { data, info } = await sharp(input)
  .ensureAlpha()
  .raw()
  .toBuffer({ resolveWithObject: true });

const { width, height, channels } = info;
const pixels = new Uint8Array(data);

for (let i = 0; i < pixels.length; i += channels) {
  const r = pixels[i];
  const g = pixels[i + 1];
  const b = pixels[i + 2];
  // If pixel is near-white, make transparent
  if (r > 220 && g > 220 && b > 220) {
    pixels[i + 3] = 0;
  }
}

await sharp(pixels, { raw: { width, height, channels } })
  .png()
  .toFile(output);

console.log('Done! Saved to', output);
