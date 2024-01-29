import {fileURLToPath} from 'url';
import path from 'path';
import { Worker } from 'worker_threads';
import os from 'os';

const performCalculations = async () => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);
    const filePath = path.join(__dirname, 'worker.js');

    const numWorkers = os.cpus().length;
    const results = [];

    const workerPromises = Array.from({ length: numWorkers }, (_, index) => {
        const workerData = 10 + index;
        return new Promise((resolve) => {
            const worker = new Worker(filePath, { workerData });

            worker.on('message', (result) => {
                results[index] = { status: 'resolved', data: result };
            });

            worker.on('error', (error) => {
                results[index] = { status: 'error', data: null };
                console.error(`Error in worker ${index}:`, error);
            });

            worker.on('exit', (code) => {
                if (code !== 0) {
                    results[index] = { status: 'error', data: null };
                    console.error(`Worker ${index} exited with code ${code}`);
                }
                resolve();
            });
        });
    });

    await Promise.all(workerPromises);

    console.log('Results:', results);
};

await performCalculations();