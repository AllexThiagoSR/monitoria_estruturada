const { Course, Teacher, Student } = require('../models');

const includeTeacher = (include) => {
  const includes = include === 'true';
  return includes ? { model: Teacher, as: 'teacher' } : undefined;
};

const includeStudents = (include) => {
  const includes = include === 'true';
  return includes ? { model: Student, as: 'students', through: { attributes: [] } } : undefined;
};

const getAll = async (includeT = false, includeS = false) => {
  const include = [includeTeacher(includeT), includeStudents(includeS)]
    .filter((query) => query !== undefined);
  try {
    const courses = await Course.findAll({
      include,
    });
    return { status: 200, data: courses };
  } catch (error) {
    console.log(error);
    return { status: 500, data: { message: 'Internal server error.' } };
  }
};

const getById = async (id, includeT = false, includeS = false) => {
  try {
    const include = [includeTeacher(includeT), includeStudents(includeS)]
      .filter((query) => query !== undefined);
    const course = await Course.findOne({ where: { id }, include });
    if (!course) return { status: 404, data: { message: 'Course not found' } };
    return { status: 200, data: course };
  } catch (error) {
    return { status: 500, data: { message: 'Internal server error.' } };
  }
};

module.exports = {
  getAll,
  getById,
};
