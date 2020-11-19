var express = require("express");
var cors = require("cors");

var app = express();

app.use(cors());
// app.use(bodyparser.json());
// app.use(bodyparser.urlencoded({ extended: true }));

const todos = [
  {
    userId: 1,
    id: 1,
    text: "Create Server in Nodejs to serve fake data",
    completed: false
  },
  {
    userId: 1,
    id: 2,
    text: "Create React-app",
    completed: false
  },
  {
    userId: 1,
    id: 3,
    text: "Fetch data from server",
    completed: false
  },
  {
    userId: 1,
    id: 4,
    text: "Display list of Todo",
    completed: true
  },
  {
    userId: 1,
    id: 5,
    text: "Build add, delete, edit and update of Todo",
    completed: false
  },
  {
    userId: 1,
    id: 6,
    text: "Add filter section for Todos",
    completed: false
  },
  {
    userId: 1,
    id: 7,
    text: "Fix CSS of frontend",
    completed: false
  },
  {
    userId: 1,
    id: 8,
    text: "Push code to Github",
    completed: true
  }
];
app.get("/todo", (req, res) => {
  res.send({ todos });
});

const PORT = 5000;

app.listen(PORT, (err, resp) => {
  if (err) {
    console.log(`Error ${err}`);
  }
  console.log(`server on port ${PORT}`);
});
