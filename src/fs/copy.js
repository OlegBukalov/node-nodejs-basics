import {fileURLToPath} from 'url';
import path from 'path';
import fs from 'fs';

const copy = async () => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);

    const sourceFolderPath = path.join(__dirname, 'files');
    const targetFolderPath = path.join(__dirname, 'files_copy');

    if (!fs.existsSync(sourceFolderPath) || fs.existsSync(targetFolderPath)) {
        throw new Error('FS operation failed');
    }

    try {
        fs.mkdirSync(targetFolderPath);

        const files = fs.readdirSync(sourceFolderPath);

        files.forEach((file) => {
            const sourcePath = path.join(sourceFolderPath, file);
            const targetPath = path.join(targetFolderPath, file);

            fs.copyFileSync(sourcePath, targetPath);
        });

    } catch (error) {
        console.log(error);
    }
};

await copy();
