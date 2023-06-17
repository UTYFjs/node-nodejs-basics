import fs from 'fs';
import path, { dirname } from 'path';
import url from 'url';
import { pipeline } from 'stream/promises';
import {} from 'stream';
import zlib from 'zlib';

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const decompress = async () => {
    const readPath = path.join(__dirname, 'files', 'archive.gz');
    const writePath = path.join(__dirname, 'files', 'fileToCompress.txt');
    const readStream = fs.createReadStream(readPath);
    const writeStream = fs.createWriteStream(writePath);
    const gunzipStream = zlib.createGunzip();
    try {
      await pipeline(readStream, gunzipStream, writeStream);
    } catch (error) {
      console.error('An error occurred:', error);
    }
  // Write your code here
};

await decompress();
