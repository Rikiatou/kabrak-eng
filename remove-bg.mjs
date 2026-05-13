import sharp from 'sharp';

// Load the image, make white background transparent, save as PNG
const input = './public/logo-kabrakeng-new.png';
const output = './public/logo-kabrakeng.png';

const { data, info } = await sharp(input)
  .ensureAlpha()
  .raw()
  .toBuffer({ resolveWithObject: true });

const { width, height, channels } = info;
const pixels = new Uint8Array(data);

// Flood-fill from corners to remove only the outer white background
// First pass: mark pure-white border pixels (very tight threshold)
const visited = new Uint8Array(width * height);
const queue = [];

// Seed from all 4 corners and edges
const seed = (x, y) => {
  const idx = (y * width + x);
  if (visited[idx]) return;
  const pi = idx * channels;
  const r = pixels[pi], g = pixels[pi+1], b = pixels[pi+2];
  if (r > 200 && g > 200 && b > 200) {
    visited[idx] = 1;
    queue.push([x, y]);
  }
};

for (let x = 0; x < width; x++) { seed(x, 0); seed(x, height - 1); }
for (let y = 0; y < height; y++) { seed(0, y); seed(width - 1, y); }

// BFS flood fill
while (queue.length > 0) {
  const [cx, cy] = queue.pop();
  const neighbors = [[cx-1,cy],[cx+1,cy],[cx,cy-1],[cx,cy+1]];
  for (const [nx, ny] of neighbors) {
    if (nx < 0 || ny < 0 || nx >= width || ny >= height) continue;
    const ni = ny * width + nx;
    if (visited[ni]) continue;
    const pi = ni * channels;
    const r = pixels[pi], g = pixels[pi+1], b = pixels[pi+2];
    if (r > 180 && g > 180 && b > 180) {
      visited[ni] = 1;
      queue.push([nx, ny]);
    }
  }
}

// Make all flood-filled pixels transparent
for (let i = 0; i < width * height; i++) {
  if (visited[i]) {
    pixels[i * channels + 3] = 0;
  }
}

await sharp(pixels, { raw: { width, height, channels } })
  .png()
  .toFile(output);

console.log('Done! Saved to', output);
