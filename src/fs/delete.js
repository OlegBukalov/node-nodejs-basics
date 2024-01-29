import {fileURLToPath} from 'url';
import path from 'path';
import fs from 'fs';

const remove = async () => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);

    const fileToRemovePath = path.join(__dirname, 'files', 'fileToRemove.txt');

    if (!fs.existsSync(fileToRemovePath)) {
        throw new Error('FS operation failed');
    }

    try {
        fs.unlink(fileToRemovePath, () => {
            console.log('file removed');
        });
    } catch (error) {
        console.log(error);
    }
};

await remove();