import { createServer } from 'http'
const PORT = process.env.PORT;
const users = [
    { id: 1, name: "John" },
    { id: 2, name: "Jane" },
    { id: 3, name: "Jim" },
    { id: 4, name: "Jaye" },
]

// logger middleware 

/*
Flow

Client request → Middleware → Route handler → Response

Before route runs, middleware can:

check authentication
log request
validate data
parse JSON
handle errors
*/
const logger = (req, res, next) => {
    console.log(`${ req.method } ${ req.url }`)
    next() //moves control to next middleware/route
}

const server = createServer((req, res) => {
    logger(req, res, () => { })
    if (req.method === "GET" && req.url === "/api/users") {
        res.setHeader('Content-Type', "application/json")
        res.write(JSON.stringify(users))
        res.end()
    }
    else if (req.method === "POST" && req.url === "/api/users") {
        let body = ''
        //listen for data
        req.on('data', (chunk) => {
            body += chunk.toString()
        })

        req.on('end', () => {
            const newUser = JSON.parse(body)
            users.push(newUser)
            res.statusCode = 201
            res.write(JSON.stringify(newUser))
            res.end()
        })
    }
    else {
        res.setHeader('Content-Type', "application/json")
        res.statusCode = 404
        res.write(JSON.stringify({ message: "Route not found!" }))
        res.end()
    }

})


server.listen(PORT, () => {
    console.log(`server running on port ${ PORT }`)
})