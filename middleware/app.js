const express = require('express');
const app = express();

//middleware -> response send 

// app.use( (req,res,next)=> {
//     console.log("Hi, this is middleware")
//     next();
// }) 

// app.use(
//     (req,res,next)=> {
//     console.log("Hi, this is middleware")
//      return next();
//      console.log(`test`) // doen't work
// })

// app.use("/random", (req,res,next) => {
//     console.log("this is for random MW");
//     next();
// })

const checkToken = (req,res,next)=>{
    let {token} = req.query;
    if(token === "giveaccess"){
        next()
    }
    throw new Error("Access Denied!");  
};

app.get("api", checkToken, (req,res)=> {
    res.send("data")
})

app.get("/", (req,res) => {
    res.send("Hi im root")
})


app. get ( "/random" , (req, res) => {
    res.send("is a random page");
})

//logger
// app.use( (req,res,next) => {
//     req.time = new Date(Date.now()).toString();
//     console.log(req.method, req.hostname, req.path, req.time);
//     next();
// })

//404
app.use((req,res) => {
    res.send("Page not found!")
})

app.listen(8080 , () => {
    console.log(`app listening on port : 8080`);
})