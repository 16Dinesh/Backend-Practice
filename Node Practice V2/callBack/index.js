const fs = require("fs");

function person(name, callarg) {
  console.log("Hello,", name);
  callarg();
}

function location() {
  console.log("india");
}

person("dinesh", location);

fs.readFile("input.txt", "utf-8", (err, data) => {
  if (err) {
    console.log("Caught an Error ", err);
    return;
  }
  console.log(data)
});
