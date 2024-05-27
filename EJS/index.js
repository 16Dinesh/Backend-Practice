const express = require("express");
const app = express();
const port = 8080;
const path = require("path");

app.set("view engine" , "ejs");
app.use(express.static(path.join(__dirname,"public/css"))); // make sure to make the path join
app.use(express.static(path.join(__dirname,"public/js")));
// app.get("/",(req , res ) => {
//     res.send("this is the home page")   //working properly
// });

app.get("/",(req , res ) => {
    res.render("home.ejs")   
});
app.set("views" , path.join(__dirname,"/views"));   // to set the path 


app.get("/hello" , (req , res) => {
    res.send("this the hello ")
})

app.get("/rolldice", (req,res) => {
    let num = Math.floor(Math.random() * 6 ) + 1;
    res.render("rolldice.ejs", {diceVal: num });
})


// app.get("/ig/:username" , (req ,res) => {          //qs 
//     const followers = ["Indians" , "Africans" , 'Amaricans', "Japanese" ,'Filipino ' , 'Mexican ', 'Italian ' , 'Irish ']  //loops in EJS
//     let {username} = req.params;
//     res.render("instagram.ejs" ,{username , followers});
// })

app.get("/ig/:username" , (req ,res) => {          
    const instaData = require("./data.json")  //to get data from json
    let {username} = req.params;
    // console.log(instaData);
    const data = instaData[username]
    // console.log(data)
    if (data) {
        res.render("instagram.ejs" ,{data});
    }else {
        res.render("error")
    }
})


app.listen(port, () => {
    console.log("listening to the ",port);
});
