const express = require("express");
const app = express();

//Middleware
app.use(express.json());

let data = [
  {
    id: "1",
    title: "Book 1",
  },
  {
    id: "2",
    title: "Book 2",
  },
];

//intro route
app.get("/", (req, res) => {
  res.json({
    message: "Welcome to my RESTFul APi",
  });
});

//get all

app.get("/get", (req, res) => {
  res.json(data);
});

//get

app.get("/get/:id", (req, res) => {
  const data = data.find((item) => item.id === req.params.id);
  if (data) {
    res.status(200).json(data);
  } else {
    res.status(404).json({
      message: "No Data Found",
    });
  }
});

//add

app.post("/add", (req, res) => {
  const newData = {
    id: Math.floor(Math.random() * 1000).toString(),
    title: `Book ${Math.floor(Math.random() * 1000)}`,
  };

  data.push(newData);
  res.status(200).json({
    data: newData,
    message: "New data is added successfully",
  });
});

//update

app.put("/update/:id", (req, res) => {
  const findTheData = data.find((data) => data.id === req.params.id);
  if (findTheData) {
    findTheData.title = req.body.title || findTheData.title;

    res.status(200).json({
      message: `data with that ID ${req.params.id} updated successfully`,
      data: data,
    });
  } else {
    res.status(404).json({
      message: "No Data Found",
    });
  }
});

// delete

app.delete("/delete/:id", (req, res) => {
  const findTheData = data.findIndex((data) => data.id === req.params.id);

  if (findTheData !== -1) {
    const deletedData = data.splice(findTheData, 1);
    res.status(200).json({
      message: "data deleted successfully",
      data: deletedData[0],
    });
  } else {
    res.status(404).json({
      message: "No Data Found",
    });
  }
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is now running on port ${PORT}`);
});
