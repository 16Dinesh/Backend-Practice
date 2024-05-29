const express = require("express");
const app = express();
const port = 3000;
const path = require("path");

app.use(express.urlencoded({extended : true}));

app.set("view engine" , "ejs");
app.set("views",path.join(__dirname,"views"))
app.use(express.static(path.join(__dirname,"public/css"))); 


let posts = [
    {
      username: "Dinesh",
      content: "Learning MERN"
    },
    {
      username: "Varsha",
      content: "Learning DSA"
    },
    {
      username: "Brutu",
      content: "I'm just a Dog"
    }
];
  

app.get("/posts" , (req , res) => {
    res.render("index" , {posts})
})

app.get("/posts/new" , (req , res) => {
    res.render("form.ejs")
})

app.post("/posts" ,(req,res) => {
    console.log(req.body);
    res.send("post req is working");
})

app.listen(port , () => {
    console.log(`listing to the port : ${port}`);
})
