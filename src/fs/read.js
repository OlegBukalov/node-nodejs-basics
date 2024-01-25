import {fileURLToPath} from 'url';
import path from 'path';
import fs from 'fs';

const read = async () => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);

    const fileToReadPath = path.join(__dirname, 'files', 'fileToRead.txt');

    if (!fs.existsSync(fileToReadPath)) {
        throw new Error('FS operation failed');
    }

    const fileContent = fs.readFileSync(fileToReadPath, 'utf-8');
    console.log(fileContent);
};

await read();