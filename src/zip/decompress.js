import {fileURLToPath} from 'url';
import path from 'path';
import fs from 'fs';
import zlib from 'zlib';

const decompress = async () => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);

    const filePath = path.join(__dirname, 'fileToCompress.txt');
    const archivePath = path.join(__dirname, 'files', 'archive.gz');

    const readStream = fs.createReadStream(archivePath);
    const writeStream = fs.createWriteStream(filePath);
    const gunzipStream = zlib.createUnzip();

    readStream.pipe(gunzipStream).pipe(writeStream);
};

await decompress();