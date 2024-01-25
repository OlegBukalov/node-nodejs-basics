import {fileURLToPath} from 'url';
import path from 'path';
import fs from 'fs';
import crypto from 'crypto';

const calculateHash = async () => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);

    const filePath = path.join(__dirname, 'files', 'fileToCalculateHashFor.txt');
    const fileStream = fs.createReadStream(filePath);
    const hash = crypto.createHash('sha256');

    fileStream.on('data', data => {
        hash.update(data);
    });

    fileStream.on('end', () => {
        const fileHash = hash.digest('hex');
        console.log(fileHash);
    });
};

await calculateHash();