const express = require("express");
const router = express.Router();

const studentcontroller = require("../controllers/studentcontroller");
const courseController = require("../controllers/courseController");
const courseModel = require("../models/courseModel");

// ໜ້າທັກທາຍ
router.get("/", studentcontroller.handleGreeting);

// ນັກຮຽນ
router.get("/students", studentcontroller.handleGetStudents);

// ວິຊາ
router.get("/courses", courseController.handleGetCourses);

module.exports = router;