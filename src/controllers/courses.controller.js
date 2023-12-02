const { courseService } = require('../services');

const getAll = async (req, res) => {
  const { includeTeacher, includeStudents } = req.query;
  const { status, data } = await courseService.getAll(includeTeacher, includeStudents);
  return res.status(status).json(data);
};

const getById = async (req, res) => {
  const { includeTeacher, includeStudents } = req.query;
  const { status, data } = await courseService.getById(
    req.params.id,
    includeTeacher,
    includeStudents,
  );
  return res.status(status).json(data);
};

module.exports = {
  getAll,
  getById,
};
