const express = require('express');
const app = express();
const users = require("./routes/user");
const posts = require("./routes/posts")


app.get("/", (req,res) => {
    res.send("Hi, I am Root!");
})

// users
app.use("/users", users);
//posts
app.use("/posts", posts);





const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});