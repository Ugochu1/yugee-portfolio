import { readFileSync } from "fs";
import { NextApiRequest, NextApiResponse } from "next";
import path from "path";
import sharp from "sharp";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { src, w, q, thumbnail } = req.query;

  const basename = path.basename(src as string, path.extname(src as string));

  if (thumbnail) {
    const thumbnailImage = readFileSync(
      path.join(process.cwd(), `/pages/api/images/${basename}-thumbnail.jpg`)
    );
    return res.send(thumbnailImage);
  }

  const imagePath = path.join(process.cwd(), `/pages/api/images/${src}`);
  const originalImage = readFileSync(imagePath);

  const resizedImageBuffer = await sharp(originalImage)
    .png({
      quality: q ? Number(q) : 75,
    })
    .resize(Number(w))
    .toBuffer();

  res.send(resizedImageBuffer)
}
