/**
 * One-time script to convert PNG cover images to WebP.
 * Usage: node scripts/convert-covers-to-webp.mjs
 *
 * After running, update frontmatter coverImage/ogImage paths from .png to .webp,
 * then delete the original PNGs.
 */

import sharp from "sharp";
import { readdir, stat, unlink } from "fs/promises";
import { join, extname, basename } from "path";

const COVERS_DIR = "public/assets/blog/covers";
const QUALITY = 80;

async function convert() {
  const files = await readdir(COVERS_DIR);
  const pngs = files.filter((f) => extname(f).toLowerCase() === ".png");

  console.log(`Found ${pngs.length} PNG files to convert.\n`);

  for (const file of pngs) {
    const inputPath = join(COVERS_DIR, file);
    const outputPath = join(COVERS_DIR, basename(file, ".png") + ".webp");
    const inputStats = await stat(inputPath);

    await sharp(inputPath).webp({ quality: QUALITY }).toFile(outputPath);

    const outputStats = await stat(outputPath);
    const savings = (
      ((inputStats.size - outputStats.size) / inputStats.size) *
      100
    ).toFixed(1);

    console.log(
      `${file} → ${basename(outputPath)}  |  ${(inputStats.size / 1024).toFixed(0)}KB → ${(outputStats.size / 1024).toFixed(0)}KB  (${savings}% smaller)`
    );
  }

  console.log("\nDone! Now update frontmatter paths and delete original PNGs.");
}

convert().catch(console.error);
