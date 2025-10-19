const express = require("express");
const cors = require("cors");
const ipaddr = require("ipaddr.js");

const app = express();
const port = process.env.PORT || 5000;

// middleware

app.use(cors());
app.use(express.json());

const users = [
  { id: 1, name: "sabana", email: "sabana@gmail.com" },
  { id: 2, name: "bobits", email: "bobita@gmail.com" },
  { id: 3, name: "kobbits", email: "kobits@gmail.com" },
];

app.get("/", (req, res) => {
  res.send("user management server is running");
});
app.get("/users", (req, res) => {
  res.send(users);
});

app.post("/users", (req, res) => {
  console.log("post api hitting");
  console.log(req.body);
  const newUser = req.body;
  newUser.id = users.length + 1;
  users.push(newUser);
  res.send(newUser);
});
app.listen(port, () => {
  console.log(`server is running in port : ${port}`);
});
