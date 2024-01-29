import {fileURLToPath} from 'url';
import path from 'path';
import fs from 'fs';

const list = async () => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);

    const filesPath = path.join(__dirname, 'files');

    if (!fs.existsSync(filesPath)) {
        throw new Error('FS operation failed');
    }

    const filenames = fs.readdirSync(filesPath);
    console.log(filenames);
};

await list();