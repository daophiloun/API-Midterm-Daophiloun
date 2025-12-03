module.exports = app => {
  const students = require("../controllers/student.controller.js");
  app.get("/students", students.findAll);
};