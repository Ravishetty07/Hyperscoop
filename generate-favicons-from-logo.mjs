import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const pngPath = path.resolve('src/assets/images/logo/logo.png');

async function generateFavicons() {
  try {
    const pngBuffer = fs.readFileSync(pngPath);
    
    // Generate favicon-32x32.png
    await sharp(pngBuffer)
      .resize(32, 32, { fit: 'contain', background: { r: 255, g: 255, b: 255, alpha: 0 } })
      .png()
      .toFile(path.resolve('public', 'favicon-32x32.png'));
      
    // Generate apple-touch-icon.png (180x180)
    await sharp(pngBuffer)
      .resize(180, 180, { fit: 'contain', background: { r: 255, g: 255, b: 255, alpha: 1 } })
      .png()
      .toFile(path.resolve('public', 'apple-touch-icon.png'));
      
    // Create a 64x64 png and rename it to favicon.ico
    await sharp(pngBuffer)
      .resize(64, 64, { fit: 'contain', background: { r: 255, g: 255, b: 255, alpha: 0 } })
      .png()
      .toFile(path.resolve('public', 'favicon.ico'));
      
    console.log("Favicons generated from logo.png successfully!");
  } catch (error) {
    console.error("Error generating favicons:", error);
  }
}

generateFavicons();
