const express = require("express");
const app = express();
const port = 3000;
const path = require("path")

app.set("view engine" , "ejs");
app.use(express.static(path.join(__dirname,"public/css")));
app.use(express.static(path.join(__dirname,"public/files")));

app.get("/" , (req , res) => {
    res.render("home");
});
app.set("views" , path.join(__dirname,"/views"));


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
