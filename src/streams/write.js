import fs from 'fs';
import path, { dirname } from 'path';
import url from 'url';
import {pipeline} from 'stream/promises'

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const write = async () => {
    const fileForWrite = path.join(__dirname, 'files', 'fileTowrite.txt')
    fs.watchFile(fileForWrite, 'utf-8', function (){ 
      console.log('file changed');
    });
    const writeStream = fs.createWriteStream(fileForWrite);
    try {
      await pipeline(process.stdin, writeStream);
    } catch (err) {
      console.log(`Error: ${err}`);
    }
  // Write your code here
};

await write();
