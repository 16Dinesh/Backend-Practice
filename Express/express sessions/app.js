const express = require('express');
const app = express();
const session = require('express-session')

const sessionOptions = {secret : "my-super-secrets-string", resave: false,saveUninitialized: true };

app.use(
    session(sessionOptions)
);

app.get("/register", (req,res) => {
    let { name ="Dinesh" } = req.query;
    req.session.name = name;
    //console.log(req.session.name) 
    res.send(name);
    res.redirect(303,"/hello");
})

app.get("/hello" , (req,res) => {
    res.send(`hello this is -> ${req.session.name} `)
})

// app.get("/test", (req,res) => {
//     res.send("test successful!9")
// })

// app.get("/reqcount", (req, res) => {
//     if (req.session.count) {
//         req.session.count++;
//     } else {
//         req.session.count = 1;
//     }
//     res.send(`You send a request ${req.session.count} times`)
// })

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});