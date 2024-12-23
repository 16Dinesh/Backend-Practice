const { error } = require("console");
const fs = require("fs");

fs.readFile("input.txt", "utf-8", (err, data) => {
  if (err) {
    console.log("Error Detected", err);
    return;
  }

  const modifiedData = data.toUpperCase();

  fs.writeFile("clone.txt", modifiedData, (err) => {
    if (err) {
      console.log("Error Detected", err);
      return;
    }

    console.log("data written to the new file");

    fs.readFile("clone.txt", "utf-8", (err, data) => {
      if (err) {
        console.error("Error reading file", err);
        return;
      }
      console.log(data);
    });
  });
});
