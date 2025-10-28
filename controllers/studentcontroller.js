const studentmodel = require("../models/studentmodel");

const handleGreeting = (req, res) => {
  res.send("Hello, Lao-Top API");
};

const handleGetStudents = (req, res) => {
  const sData = studentmodel.getAllStudents();
  res.json(sData);
};

const studentcontroller = {
  handleGreeting,
  handleGetStudents,
};

module.exports = studentcontroller;