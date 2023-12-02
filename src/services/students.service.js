const { Student, Course } = require('../models');

const getAll = async () => {
  try {
    const students = await Student.findAll();
    return { status: 200, data: students };
  } catch (error) {
    return { status: 500, data: { message: 'Internal server error.' } };
  }
};

const getById = async (id) => {
  try {
    const student = await Student.findOne({ where: { id } });
    if (!student) return { status: 404, data: { message: 'Student not found' } };
    return { status: 200, data: student };
  } catch (error) {
    return { status: 500, data: { message: 'Internal server error.' } };
  }
};

const getAllWithCourses = async () => {
  try {
    const students = await Student.findAll({
      include: {
        model: Course,
        as: 'courses',
        through: { attributes: [] },
      },
    });
    return { status: 200, data: students };
  } catch (error) {
    return { status: 500, data: { message: 'Internal server error.' } };
  }
};

const getByIdWithCourses = async (id) => {
  try {
    const student = await Student.findOne({
      where: { id },
      include: {
        model: Course,
        as: 'courses',
        through: { attributes: [] },
      },
    });
    if (!student) return { status: 404, data: { message: 'Student not found' } };
    return { status: 200, data: student };
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
