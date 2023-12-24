const { Router } = require("express");
const express = require("express");
const router = Router();
const zod = require("zod");

const adminMiddleware = require("../middleware/admin");
const { Admin, Course } = require("../db/index");

router.use(express.json());

const courseValSchema = zod.object({
  title: zod.string(),
  description: zod.string(),
  price: zod.number(),
  imageLink: zod.string(),
});

// Admin Routes
router.post("/signup", async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  if (username && password) {
    await Admin.create({ username: username, password: password });

    res.status(200).json({
      message: "Admin created succesfully",
    });
  } else {
    res.status(404).json({ err: "Cannot add admin" });
  }
});

router.post("/courses", adminMiddleware, async (req, res) => {
  const resp = courseValSchema.safeParse(req.body);
  if (!resp.success) {
    return res.status(404).json({ err: resp.error });
  }

  const newCourse = new Course(resp.data);
  await newCourse.save();
  res.status(200).json({
    message: "Course added succesfully",
    courseId: newCourse._id,
  });
});

router.get("/courses", adminMiddleware, async (req, res) => {
  const allCourses = await Course.find().exec();

  if (allCourses.length > 0) {
    res.status(200).json({ courses: allCourses });
  } else {
    res.status(404).json({
      err: "No Courses Found",
    });
  }
});

router.use((err, req, res, next) => {
  res.json({
    err: "Something up with the server",
  });
});

module.exports = router;
