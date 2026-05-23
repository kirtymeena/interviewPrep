// import fs from 'fs'
import { readFile } from "fs"
import fs from "fs/promises"

// async version
// fs.readFile('./test.txt', 'utf8', (err, data) => {
//     if (err) {
//         throw err;
//     }
//     console.log(data)
// })

// synchronous version -  readFileSync()  --> its blocking
// const data = fs.readFileSync("./test.txt", 'Utf8')
// console.log(data)


// readFile() - promise version 

fs.readFile('./test.txt', 'utf8')
    .then(data => console.log(data)).catch(err => console.log(err))


// readFile() - async await - preferred way
const readFiles = async () => {
    try {
        const data = fs.readFile('./test.txt', 'utf8')
        console.log(data)
    } catch (err) {
        console.log(err)
    }
}




// ============ write files===============

//  writeFiles() => overwrites into the file
const writeFiles = async () => {
    try {
        await fs.writeFile("./test.txt", "Hello")
        console.log("File written to...")
    } catch (err) {
        console.log(err)
    }
}

// to not overwrite - appendFile()

const appendFile = async () => {
    try {
        await fs.appendFile("./test.txt", "\nAppending here")
        console.log("File appended...")
    } catch (err) {
        console.log(err)
    }
}

writeFiles()
appendFile()
readFiles()
