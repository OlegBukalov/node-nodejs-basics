import {fileURLToPath} from 'url';
import path from 'path';
import fs from 'fs';
import zlib from 'zlib';

const compress = async () => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);

    const filePath = path.join(__dirname, 'files', 'fileToCompress.txt');
    const archivePath = path.join(__dirname, 'files', 'archive.gz');

    const readStream = fs.createReadStream(filePath);
    const writeStream = fs.createWriteStream(archivePath);
    const gzipStream = zlib.createGzip();

    readStream.pipe(gzipStream).pipe(writeStream);
};

await compress();