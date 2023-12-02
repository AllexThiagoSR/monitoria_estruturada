module.exports = {
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkInsert(
      'classes',
      [
        {
          course_id: 1, // ID do curso
          student_id: 1, // ID do estudante
        },
        {
          course_id: 2,
          student_id: 2,
        },
      ],
      { timestamps: false }
    );
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('classes', null, {});
  },
};
