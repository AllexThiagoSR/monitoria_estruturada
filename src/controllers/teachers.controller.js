const { teacherService } = require('../services');

const getAll = async (_req, res) => {
  const { status, data } = await teacherService.getAll();
  return res.status(status).json(data);
};

const getById = async (req, res) => {
  const { status, data } = await teacherService.getById(req.params.id);
  return res.status(status).json(data);
};

const getAllWithCourses = async (_req, res) => {
  const { status, data } = await teacherService.getAllWithCourses();
  return res.status(status).json(data);
};

const getByIdWithCourses = async (req, res) => {
  const { status, data } = await teacherService.getByIdWithCourses(req.params.id);
  return res.status(status).json(data);
};

module.exports = {
  getAll,
  getById,
  getAllWithCourses,
  getByIdWithCourses,
};
