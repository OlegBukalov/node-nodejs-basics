const parseArgs = () => {
    const args = process.argv;

    for (let i = 2; i < args.length; i+=2) {
        const propName = args[i].substring(2);
        const value = args[i+1];

        console.log(`${propName} is ${value}`);
    }
};

parseArgs();