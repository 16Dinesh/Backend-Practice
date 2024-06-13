const { faker } = require('@faker-js/faker');
const mysql = require('mysql2');
const express = require("express");
const app = express();
const path = require("path");
const methodOverride = require("method-override");
const { threadId } = require('worker_threads');
// const bcrypt = require('bcrypt');

app.use(methodOverride("_method"));
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

let port = 8080;

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'node-with-SQL',
    password: 'dinesh16',
});

let getRandomUser = () => {
    return [    
      faker.string.uuid(),
      faker.internet.userName(),
      faker.internet.email(),
      faker.internet.password(),
      ];
  };

// Home route
app.get("/", (req, res) => {
    let q = "SELECT count(*) FROM user";
    connection.query(q, (err, result) => {
        if (err) {
            console.error(err);
            return res.send("Some error in DATABASE");
        }
        let count = result[0]["count(*)"];
        res.render("home", { count });
    });
});

// Show route
app.get("/user", (req, res) => {
    let q = `SELECT * FROM user`;
    connection.query(q, (err, users) => {
        if (err) {
            console.error(err);
            return res.send("Some error in DATABASE");
        }
        res.render("show", { users });
    });
});

// Edit route
app.get("/user/:id/edit", (req, res) => {
    let { id } = req.params;
    let q = `SELECT * FROM user WHERE id = ?`;
    connection.query(q, [id], (err, result) => {
        if (err) {
            console.error(err);
            return res.send("Some error in DATABASE");
        }
        if (result.length === 0) {
            return res.send("User not found");
        }
        let user = result[0];
        res.render("edit", { user });
    });
});

// Update route
app.patch("/user/:id", (req, res) => {
    let {id} = req.params;
    let {password: formPass, username: newUsername} = req.body;
    let q = `SELECT * FROM user WHERE id='${id}' `
    try {
        connection.query(q , (err, result) => {
            if(err) throw err;
            let user = result[0];
            if(formPass != user.password) {
                res.send("WRONG Password")
            }else {
                let q2 = `UPDATE user SET username='${newUsername}' WHERE id='${id}'`;
                connection.query(q2 , (err , result) => {
                    if(err) throw err;
                    res.redirect("/user");
                });
            }
            
        });
        } catch (err) {
            console.log(err);
            res.send("some error in DATABASE");
        }
})


app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
