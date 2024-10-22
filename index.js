const fs = require('fs');
const path = require('path');

//Read File
fs.readFile(path.join(__dirname, 'files', 'starter.txt'), 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data.toString());
})


console.log('Hello...');

process.on('uncaughtException', err => {
    console.error(`There was an uncaught exception: ${err}`);
    process.exit(1);
})

//Write File
fs.writeFile(path.join(__dirname, 'files', 'reply.txt'), 'Nice to meet you.', (err) => {
    if (err) throw err;
    console.log('Write Complete');
})

//Append File
fs.appendFile(path.join(__dirname, 'files', 'test.txt'), 'Mo Testing Mo Problems text.', (err) => {
    if (err) throw err;
    console.log('Append Complete');
})

// Combined writeFile and appendFile with rename
fs.writeFile(path.join(__dirname, 'files', 'reply.txt'), 'Nice to meet you.', (err) => {
    if (err) throw err;
    console.log('Write Complete');

    fs.appendFile(path.join(__dirname, 'files', 'reply.txt'), ' Yes it is!', (err) => {
        if (err) throw err;
        console.log('Append Complete');

        fs.rename(path.join(__dirname, 'files', 'reply.txt'), path.join(__dirname, 'files', 'newReply.txt'), (err) => {
            if (err) throw err;
            console.log('Rename Complete');
        });
    });
});