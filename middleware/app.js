const express = require('express');
const app = express();

//middleware -> response send 

app.get("/", (req,res) => {
    
})


app.listen(8080 , () => {
    console.log(`app listening on port : 8080`);
})