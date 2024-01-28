import {fileURLToPath} from 'url';
import path from 'path';
import fs from 'fs';

const write = async () => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);

    const filePath = path.join(__dirname, 'files', 'fileToWrite.txt');
    const fileStream = fs.createWriteStream(filePath);

    process.stdin.pipe(fileStream);
};

await write();