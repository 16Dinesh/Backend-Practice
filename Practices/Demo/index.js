const express = require("express");
const app = express();
const port = 3000;
const path = require("path")

app.set("view engine" , "ejs");
app.use(express.static(path.join(__dirname,"public/css")));
app.use(express.static(path.join(__dirname,"public/Ass")));

app.get("/" , (req , res) => {
    res.render("home");
});
app.set("views" , path.join(__dirname,"/views"));


app.listen(port , () => {
    console.log("listening to the ",port);
})
