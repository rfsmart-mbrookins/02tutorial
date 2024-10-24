// const fs = require('fs');
const fsPromises = require('fs').promises;
const path = require('path');

const fileOps = async () => {
    try {
        const data = await fsPromises.readFile(path.join(__dirname, 'files', 'starter.txt'), 'utf8');
        console.log(data);
        await fsPromises.unlink(path.join(__dirname, 'files', 'starter.txt'));
        await fsPromises.writeFile(path.join(__dirname, 'files', 'promiseWrite.txt'), data);
        await fsPromises.appendFile(path.join(__dirname, 'files', 'promiseWrite.txt'), '\n\nNice to meet you.');
        await fsPromises.appendFile(path.join(__dirname, 'files', 'promiseWrite.txt'), '\n\nNice to meet you.');
        await fsPromises.rename(path.join(__dirname, 'files', 'promiseWrite.txt'), path.join(__dirname, 'files', 'promiseComplete.txt'));
        const newData = await fsPromises.readFile(path.join(__dirname, 'files', 'promiseComplete.txt'), 'utf8');
        console.log(newData);
    } catch (err) {
        console.log(err);
    }
}
fileOps();

// //Read File
// fs.readFile(path.join(__dirname, 'files', 'starter.txt'), 'utf8', (err, data) => {
//     if (err) throw err;
//     console.log(data.toString());
// })


// console.log('Hello...');

// process.on('uncaughtException', err => {
//     console.error(`There was an uncaught exception: ${err}`);
//     process.exit(1);
// })

// //Write File
// fs.writeFile(path.join(__dirname, 'files', 'reply.txt'), 'Nice to meet you.', (err) => {
//     if (err) throw err;
//     console.log('Write Complete');
// })

// //Append File
// fs.appendFile(path.join(__dirname, 'files', 'test.txt'), 'Mo Testing Mo Problems text.', (err) => {
//     if (err) throw err;
//     console.log('Append Complete');
// })

// // Combined writeFile and appendFile with rename aka CallBack Hell
// fs.writeFile(path.join(__dirname, 'files', 'reply.txt'), 'Nice to meet you.', (err) => {
//     if (err) throw err;
//     console.log('Write Complete');

//     fs.appendFile(path.join(__dirname, 'files', 'reply.txt'), ' Yes it is!', (err) => {
//         if (err) throw err;
//         console.log('Append Complete');

//         fs.rename(path.join(__dirname, 'files', 'reply.txt'), path.join(__dirname, 'files', 'newReply.txt'), (err) => {
//             if (err) throw err;
//             console.log('Rename Complete');
//         });
//     });
// });

