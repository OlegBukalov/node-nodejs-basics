import path from 'path';

const create = async () => {
    const filePath = path.join('./files', 'fresh.txt');
    console.dir(path.resolve(__dirname));
};

await create();