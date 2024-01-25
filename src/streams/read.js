import {fileURLToPath} from 'url';
import path from 'path';
import fs from 'fs';

const read = async () => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);

    const filePath = path.join(__dirname, 'files', 'fileToRead.txt');
    const fileStream = fs.createReadStream(filePath);

    fileStream.on('data', chunk => {
        process.stdout.write(chunk);
    });

    fileStream.on('end', () => {
        process.stdout.write('\n');
    });
};

await read();