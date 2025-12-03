const Student = require("../models/student.model.js");

exports.findAll = (req, res) => {
  Student.getAll((err, data) => {
    if (err)
      res.status(500).send({
        message: err.message || "Error fetching students."
      });
    else res.send(data);
  });
};