const sql = require("./db.js");

const Student = function(student) {
  this.name = student.name;
  this.age = student.age;
  this.major = student.major;
};

Student.getAll = result => {
  sql.query("SELECT * FROM students", (err, res) => {
    if (err) {
      console.log("Error: ", err);
      result(err, null);
      return;
    }
    result(null, res);
  });
};

module.exports = Student;