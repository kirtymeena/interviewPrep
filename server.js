import http from 'http';
const PORT = process.env.PORT;

const server = http.createServer((req, res) => {
    try {
        if (req.method === "GET") {

            if (req.url === "/") {
                res.writeHead(200, { 'content-type': 'text/html' })
                res.end(`<h1>Homepage</h1>`)
            }
            else if (req.url === "/about") {
                res.writeHead(200, { 'content-type': 'text/html' })
                res.end(`<h1>about</h1>`)
            }
            else {
                res.writeHead(404, { 'content-type': 'text/html' })
                res.end(`<h1>not found</h1>`)
            }
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