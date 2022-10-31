// Stream is used to move data by small amounts
const fs = require('fs')

const rs = fs.createReadStream('./files/lorem.txt', { encoding: 'utf-8' })

const ws = fs.createWriteStream('./files/new-lorem.txt')

// rs.on('data', (dataChunk) => {
//     ws.write(dataChunk)
// })

rs.pipe(ws)