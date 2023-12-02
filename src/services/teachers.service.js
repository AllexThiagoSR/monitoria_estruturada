const { Teacher, Course } = require('../models');

const getAll = async () => {
  try {
    const teachers = await Teacher.findAll();
    return { status: 200, data: teachers };
  } catch (error) {
    return { status: 500, data: { message: 'Internal server error.' } };
  }
};

const getById = async (id) => {
  try {
    const teacher = await Teacher.findOne({ where: { id } });
    if (!teacher) return { status: 404, data: { message: 'Teacher not found.' } };
    return { status: 200, data: teacher };
  } catch (error) {
    return { status: 500, data: { message: 'Internal server error.' } };
  }
};

const getAllWithCourses = async () => {
  try {
    const teachers = await Teacher.findAll({
      include: {
        model: Course,
        as: 'courses',
        attributes: { exclude: ['teacherId'] },
      },
    });
    return { status: 200, data: teachers };
  } catch (error) {
    return { status: 500, data: { message: 'Internal server error.' } };
  }
};

const getByIdWithCourses = async (id) => {
  try {
    const teacher = await Teacher.findOne({
      where: { id },
      include: {
        model: Course,
        as: 'courses',
        attributes: { exclude: ['teacherId'] },
      },
    });
    if (!teacher) return { status: 404, data: { message: 'Teacher not found.' } };
    return { status: 200, data: teacher };
  } catch (error) {
    return { status: 500, data: { message: 'Internal server error.' } };
  }
};

module.exports = {
  getAll,
  getById,
  getAllWithCourses,
  getByIdWithCourses,
};
