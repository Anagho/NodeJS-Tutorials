const fsPromises = require('fs').promises
const path = require('path')

// Function for asynchronous file operations
const fileOps = async () => {
    try {
        const data = await fsPromises.readFile(path.join(__dirname, 'files', 'starter.txt'), 'utf-8')
        console.log(data)

        // To delete a file
        await fsPromises.unlink(path.join(__dirname, 'files', 'starter.txt'))

        // To write a file
        await fsPromises.writeFile(path.join(__dirname, 'files', 'promiseWrite.txt'), data)
        await fsPromises.appendFile(path.join(__dirname, 'files', 'promiseWrite.txt'), '\n\nNice to meet you.')
        await fsPromises.rename(path.join(__dirname, 'files', 'promiseWrite.txt'), path.join(__dirname, 'files', 'promiseComplete.txt'),)

        const newData = await fsPromises.readFile(path.join(__dirname, 'files', 'promiseComplete.txt'), 'utf-8')
        console.log(newData)
    } catch(err) {
        console.error(err)
    }
}

fileOps()

// To Read File
// fs.readFile(path.join(__dirname, 'files', 'starter.txt'), 'utf-8', (err, data) => {
//     if (err) throw err;
//     console.log(data)
// })

// To Write File - create a file with some contents
// fs.writeFile(path.join(__dirname, 'files', 'reply.txt'), 'Nice to meet you', (err) => {
//     if (err) throw err;
//     console.log('Write complete')

//     fs.appendFile(path.join(__dirname, 'files', 'reply.txt'), '\n\Yes it is', (err) => {
//         if (err) throw err;
//         console.log('Append complete')

//         // To rename a file
//         fs.rename(path.join(__dirname, 'files', 'reply.txt'), path.join(__dirname, 'files', 'newReply.txt'), (err) => {
//             if (err) throw err;
//             console.log('Rename complete')
//         })
//     })
// })

// To Append File - update a file or create a file if it does not exist
// fs.appendFile(path.join(__dirname, 'files', 'test.txt'), 'testing text', (err) => {
//     if (err) throw err;
//     console.log('Append complete')
// })


// exit on uncaught errors
process.on('uncaughtException', err => {
    console.error(`There was an uncaught error: ${err}`)
    process.exit(1)
})