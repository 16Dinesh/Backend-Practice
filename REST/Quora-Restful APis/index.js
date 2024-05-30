const express = require("express");
const app = express();
const port = 3000;
const path = require("path");

app.use(express.urlencoded({extended : true}));

app.set("view engine" , "ejs");
app.set("views",path.join(__dirname,"views"))
app.use(express.static(path.join(__dirname,"public/"))); 
``

let posts = [
    {
      id: "1a",
      username: "Dinesh",
      content: "Learning MERN"
    },
    {
      id: "1b",
      username: "Varsha",
      content: "Learning DSA"
    },
    {
      id: "1c",
      username: "Brutu",
      content: "I'm just a Dog"
    }
];
  

app.get("/posts" , (req , res) => {
    res.render("index.ejs" , {posts})
})

app.get("/posts/new" , (req , res) => {
    res.render("form.ejs")
})

app.post("/posts" ,(req,res) => {
    let {username , content} = req.body;
    posts.push({ username , content }) // adds the data to posts
    // res.send("post req is working");
    res.redirect("/posts")  //by default  sends the get request
});

app.get("/posts/:id" , (req,res)=> {
  let {id} = req.params;
  // console.log(id);  // working
  let post = posts.find((p) => id === p.id); // Finding the post with the matching 'id'
  // console.log(post); //working 
  // res.send("request working")
  res.render("show.ejs" , {post});
});

app.listen(port , () => {
    console.log(`listing to the port : ${port}`);
})
