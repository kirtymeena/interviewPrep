import fs from 'fs'

// async version
fs.readFile('./test.txt', 'utf8', (err, data) => {
    if (err) {
        throw err;
    }
    console.log(data)
})

// synchronous version -  readFileSync()  --> its blocking
const data = fs.readFileSync("./test.txt", 'Utf8')
console.log(data)
