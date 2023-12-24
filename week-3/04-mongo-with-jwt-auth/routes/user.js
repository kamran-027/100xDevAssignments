const { Router } = require("express");
const express = require("express");
const router = Router();
const jwt = require("jsonwebtoken");

const userMiddleware = require("../middleware/user");
const { User, Course, PurchasedCourse } = require("../db/index");

router.use(express.json());

// User Routes
router.post("/signup", async (req, res) => {
  let username = req.body.username;
  let password = req.body.password;

  const existingUser = await User.findOne({ username: username });

  if (username && password) {
    if (!existingUser) {
      await User.create({
        username: username,
        password: password,
      });
      res.status(200).json({
        message: "User added succesfully",
      });
    } else {
      res.status(404).json({
        err: "User already exists",
      });
    }
  } else {
    res.status(404).json({ err: "Cannot add user" });
  }
});

router.post("/signin", async function (req, res) {
  let username = req.body.username;

  let token = jwt.sign({ username: username }, process.env.JWTPass);
  res.status(200).json({
    token: token,
  });
});

router.get("/courses", userMiddleware, async (req, res) => {
  const allCourses = await Course.find().exec();

  if (allCourses.length > 0) {
    res.status(200).json(allCourses);
  } else {
    res.status(404).json({
      err: "No Courses Found",
    });
  }
});

router.post("/courses/:courseId", userMiddleware, async (req, res) => {
  const courseAdded = await Course.findById(req.params.courseId);
  const user = await User.findOne({ username: req.userDetails.username });
  const existingUser = await PurchasedCourse.findOne({
    "userDetails.username": req.userDetails.username,
  });

  if (existingUser) {
    let existingCourse = existingUser.Courses.find(
      (course) => course._id == req.params.courseId
    );

    if (existingCourse) {
      return res.json({ message: "Course already exists for user" });
    } else {
      existingUser.Courses.push(courseAdded);
      await existingUser.save();
    }
  } else {
    const newPurchasedCourse = new PurchasedCourse({
      userDetails: user,
      Courses: [courseAdded],
    });
    await newPurchasedCourse.save();
  }

  res.status(200).json({ message: "Added Course Successfully" });
});

router.get("/purchasedCourses", userMiddleware, async (req, res) => {
  const existingUser = await PurchasedCourse.findOne({
    "userDetails.username": req.userDetails.username,
  });

  if (existingUser) {
    existingUser.Courses.length > 0
      ? res.status(200).json(existingUser.Courses)
      : res.status(404).json({
          message: "No course added for this user",
        });
  } else {
    res.status(404).json({
      err: "User does not exist",
    });
  }
});

router.use((err, req, res, next) => {
  res.json({
    err: "Something up with the server",
  });
});

module.exports = router;
