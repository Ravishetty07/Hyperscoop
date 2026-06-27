import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const svgPath = path.resolve('public', 'favicon.svg');

async function generateFavicons() {
  try {
    const svgBuffer = fs.readFileSync(svgPath);
    
    // Generate favicon-32x32.png
    await sharp(svgBuffer)
      .resize(32, 32)
      .png()
      .toFile(path.resolve('public', 'favicon-32x32.png'));
      
    // Generate apple-touch-icon.png (180x180)
    await sharp(svgBuffer)
      .resize(180, 180)
      .png()
      .toFile(path.resolve('public', 'apple-touch-icon.png'));
      
    // Create a 16x16 png and rename it to favicon.ico as a fallback
    await sharp(svgBuffer)
      .resize(64, 64)
      .png()
      .toFile(path.resolve('public', 'favicon.ico'));
      
    console.log("Favicons generated successfully!");
  } catch (error) {
    console.error("Error generating favicons:", error);
  }
}

generateFavicons();
