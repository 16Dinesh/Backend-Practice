const express = require("express");
const app = express();
const port = 8080;

app.use(express.urlencoded({extended: true})); //url responce


app.get("/register" , (req , res) => {
    let {user , password} = req.query;
    res.send(`Standard GET response . Welcome ${user} \n and you Your password is : ${password}`);
})

app.post("/register" , (req , res) => {
    // console.log(req.body); working 
    let {user , password} = req.body;  //all the request stored in the req.body
    res.send(`Standard POST response . Welcome ${user} \n and you Your password is : ${password}`);
})

app.listen(port , () => {
    console.log("Listening to the port",port);
});