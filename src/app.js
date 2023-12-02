const express = require('express');
const errorHandler = require('./middlewares/error.middleware');
const { studentRoutes, teacherRoutes, courseRoutes } = require('./routes');

const app = express();

app.use(express.json());
app.get('/', (_, res) => res.status(200).json({ message: 'App is running' }));
app.use('/students', studentRoutes);
app.use('/teachers', teacherRoutes);
app.use('/courses', courseRoutes);
app.use(errorHandler);

module.exports = app;
