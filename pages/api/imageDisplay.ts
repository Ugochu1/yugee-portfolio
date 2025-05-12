import type { NextApiRequest, NextApiResponse } from "next";
import fs from "fs";
import path from "path";
import sharp from "sharp";
import formidable from "formidable"

// Disable default body parser
export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    const form = formidable({ multiples: false });

    form.parse(req, async (err, fields, files) => {
      if (err || !files.image) {
        return res.status(400).json({ error: "there is no image to display" });
      }

      const imageFile = files.image;
      const imagePath = imageFile[0].filepath;
      const buffer = fs.readFileSync(imagePath);

      const fileName = imageFile[0].originalFilename || "image";
      const fileExtension = path.extname(fileName);
      const baseFileName = path.basename(fileName, fileExtension);

      const originalPath = path.join(process.cwd(), `${baseFileName}${fileExtension}`);
      fs.writeFileSync(originalPath, buffer as unknown as Uint8Array);

      const thumbnailBuffer = await sharp(buffer).blur(1).resize(10).toBuffer();
      const thumbnailPath = path.join(process.cwd(), `${baseFileName}-thumbnail.jpg`);
      fs.writeFileSync(thumbnailPath, thumbnailBuffer as unknown as Uint8Array);

      return res.status(200).json({ message: "Success" });
    });
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}

