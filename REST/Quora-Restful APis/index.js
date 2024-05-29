const express = require("express");
const app = express();
const port = 3000;
const path = require("path");

app.use(express.urlencoded({extended : true}));

app.set("view engine" , "ejs");
app.set("views",path.join(__dirname,"views"))

app.set(express.static(path.join(__dirname,"public/css"))); 
app.set(express.static(path.join(__dirname,"public/js")));

app.get("/" , (req , res) => {
    res.send("Server working well")
})

app.listen(port , () => {
    console.log(`listing to the port : ${port}`);
})
