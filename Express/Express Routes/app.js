const express = require('express');
const app = express();
const users = require("./routes/user");
const posts = require("./routes/posts");
const cookieParser = require("cookie-parser");

app.use(cookieParser("secretcode"));

app.get("/getsignedcookie", (req,res) => {
    res.cookie("made-By", "Dinesh", { signed: true });
    res.send("Send Signed Cookie")
})

app.get("/verify" ,(req,res) => {
    //console.dir(req.cookies);     // for UnSignedCookies
    console.log(req.signedCookies)  //for SignedCookies
    res.send("verified");
})

app.get("/getcookies", (req,res) => {
    res.cookie("This cookie", "active");
    res.cookie("Greet", "Hello");
    res.send('Sending some cookies');
});

app.get("/greet", (req,res) => {
    let {name = "anonymous"} = req.cookies;
    res.send(`Ho hoi , ${name}`)
})

app.get("/", (req,res) => {
    console.dir(req.cookies);
    res.send("Hi, I am Root!");
});

// users
app.use("/users", users);
//posts
app.use("/posts", posts);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});