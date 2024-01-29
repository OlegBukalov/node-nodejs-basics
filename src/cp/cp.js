import { spawn } from 'child_process';
import {fileURLToPath} from 'url';
import path from 'path';

const spawnChildProcess = async (args) => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);
    const filePath = path.join(__dirname, 'files', 'script.js');

    const child = spawn('node', [filePath, ...args], {
        stdio: ['pipe', 'pipe', 'inherit']
    });

    process.stdin.pipe(child.stdin);

    child.stdout.on('data', (data) => {
        process.stdout.write(data);
    });
};

// Put your arguments in function call to test this functionality
spawnChildProcess( ['hello', 'world']);
