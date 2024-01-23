import {fileURLToPath} from 'url';
import path from 'path';
import fs from 'fs/promises';

const create = async () => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);
    const filePath = path.resolve(__dirname, 'files', 'fresh.txt');

    try {
        await fs.access(filePath);
        throw new Error('FS operation failed');
    } catch (error) {
        if (error.code === 'ENOENT') {
            try {
                await fs.writeFile(filePath, 'I am fresh and young');
            } catch (error) {
                console.log(error);
            }
        } else {
            console.log(error);
        }
    }
};

await create();