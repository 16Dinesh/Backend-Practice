const http = require('http')

const server = http.createServer((req,res) => {
    // console.log(req,"req");
    res.writeHead(200, {"content-type": "text/plain"})
    res.end("Hello form the Node.js form HTTP")
})

const port = 8080
server.listen(port,() => {
    console.log(`This is the Port you are in ${port}`)
})
