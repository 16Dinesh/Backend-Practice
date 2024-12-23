const { error } = require("console");
const fs = require("fs");
const path = require("path");

const docFile = path.join(__dirname, "doc");

if (!fs.existsSync(docFile)) {
  fs.mkdirSync(docFile);
  console.log("docFolder was Created");
}

//sync Way

const filepath = path.join(docFile, "example.txt");
fs.writeFileSync(filepath, "Hello THis Text is Created via Node.js");
console.log("file was Created");

const readFile = fs.readFileSync(filepath, "utf-8")
console.log(readFile)

const anothther = fs.appendFileSync(filepath, "\n This is the Another Line For the Node.js")
console.log(`Another Line Was Created`)

//async Way 

const asyncWay = path.join(docFile, "async-File.txt");

fs.writeFile(asyncWay, "This is Writen in the Async Way with Node.js", (e) => {
  if(e) throw e;
  console.log("async file was Created")

  fs.readFile(asyncWay, "utf-8", (e, data) => {
    if(e) throw(e)
      console.log(`Read the Fist Line With Node.js is Created is ${data}` )

    fs.appendFile(asyncWay, "\n this is the another line created by the Node.js", (e) => {
      if(e) throw e
      console.log(`this line is added the next line`)

      fs.readFile(asyncWay, "utf-8", (err, data) => {
        if(err) throw err
        console.log(`The is Next Line Data updated ${data}`)
      })
    })

  })
})