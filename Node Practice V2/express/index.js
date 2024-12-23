const express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.send("Hello Page This 8008")
})

app.listen(8008, () => {
    console.log("Server is Running")
})