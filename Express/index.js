const express = require('express');
const app = express();

// console.dir(app)

let port = 3000; //8080

//can only send one request at one time

app.listen(port , () => {
    console.log(`app listening on port ${port}`);
})

app.get('/', (req , res) => {
    res.send("this is set to the nodemon")
})

// app.get('/:username', (req , res) => {
//     console.log(req.params)
//     res.send(`this is the parameter`)
// })

// app.get('/:username/:id', (req , res) => {
//     let {username , id} = req.params; 
//     res.send(`wellcome to the page ${username} ${id}`)
// })

app.get('/:username/:id', (req , res) => {
    let {username} = req.params;
    let html = `<h1>Welcome to the club @ ${username} </h1> `;
    res.send(html);
})

//search?q=dinesh
app.get('/search' , (req , res) => {
    let {q}= req.query
    if (!q) {
        res.send("no such search")
    }
    res.send(`Search Results for Query Results ${q}`);
})

// app.get('/:username', (req , res) => {
//     let {username } = req.params; 
//     res.send(`wellcome to the page ${username}`)
// })


// app.get('/Dinesh', (req , res) => {
//     res.send("this the dinesh")
// })

// app.get('/varsha', (req , res) => {
//     res.send("this is varsha")
// })

// app.get('/Brutu', (req , res) => {
//     res.send("this is Brutu")
// })

app.get("*", (req , res) => {
    res.send("this path does not exist")
})
// app.use((req ,res) => {
//     // res.send("this is the basic responce")
//     console.log(`Request Recived`);
//     // res.send({
//     //     name: "Dinesh",
//     //     Age : 21,
//     //     Gender : "male"
//     // });
//     let code = "<h1>This is the responce</h1><ul><li>0</li><li>1</li><li>01</li><li>11</li></ul>"
//     res.send(code);

//     // console.log(req)
// })