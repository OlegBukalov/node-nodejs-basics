import {fileURLToPath} from 'url';
import path from 'path';
import fs from 'fs';

const rename = async () => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);

    const wrongFilePath = path.join(__dirname, 'files', 'wrongFilename.txt');
    const correctFilePath = path.join(__dirname, 'files', 'properFilename.md');

    if (!fs.existsSync(wrongFilePath) || fs.existsSync(correctFilePath)) {
        throw new Error('FS operation failed');
    }

    try {
        fs.rename(wrongFilePath, correctFilePath, () => {
            console.log('file renamed');
        });
    } catch (error) {
        console.log(error);
    }
};

await rename();