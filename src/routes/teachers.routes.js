const express = require('express');
const { teacherController } = require('../controllers');

const router = express.Router();

router.get('/', teacherController.getAll);

router.get('/with-courses', teacherController.getAllWithCourses);

router.get('/:id', teacherController.getById);

router.get('/:id/with-courses', teacherController.getByIdWithCourses);

module.exports = router;
