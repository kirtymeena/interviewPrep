import http from 'http';
import fs from 'fs/promises'
import url from 'url'
import path from 'path';

const PORT = process.env.PORT;

// GEt Current path
const __filename = url.fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

console.log(__filename, __dirname)


const server = http.createServer(async (req, res) => {
    try {
        if (req.method === "GET") {
            let filePath;
            if (req.url === "/") {
                filePath = path.join(__dirname, 'public', 'index.html')
            }
            else if (req.url === "/about") {
                filePath = path.join(__dirname, 'public', 'about.html')

            }
            else {
                throw new Error('Not Found')
            }
            const data = await fs.readFile(filePath);
            res.setHeader('Content-Type', 'text/html')
            res.write(data)
            res.end()
        } else {
            throw new Error("method not allowed")
        }

    } catch (err) {
        res.writeHead(500, { 'content-type': 'text/html' })
        res.end(`<h1>Server error</h1>`)
    }
})



server.listen(PORT, () => {
    console.log(`server running on port ${ PORT }`)
})