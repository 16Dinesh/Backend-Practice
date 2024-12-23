const http = require("http");

const server = http.createServer((req, res) => {
  const url = req.url;
  if(url === "/") {
    res.writeHead(200,{"Content-Type": "text/plain"})
    res.end("This the Home Page of Route Next Route is /next")
  } else if (url === "/next") {
    res.writeHead(200,{"Content-Type": "text/plain"})
    res.end("This the Next Page of Route Next Route is /anything")  
  } else {
    res.writeHead(404,{"Content-Type": "text/plain"})
    res.end("Error No Page Found")  }
});

let port = 3000
server.listen(port,() => {
    console.log(port)
})
