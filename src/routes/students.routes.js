const express = require('express');
const { studentController } = require('../controllers');

const router = express.Router();

router.get('/', studentController.getAll);

router.get('/with-courses', studentController.getAllWithCourses);

router.get('/:id/with-courses', studentController.getByIdWithCourses);

router.get('/:id', studentController.getById);

module.exports = router;
