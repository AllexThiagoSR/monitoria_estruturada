module.exports = {
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkInsert(
      'teachers',
      [
        {
          id: 1,
          name: 'Professor 1',
          registration: 'T001',
        },
        {
          id: 2,
          name: 'Professor 2',
          registration: 'T002',
        },
        // Adicione mais professores conforme necessário
      ],
      { timestamps: false }
    ); // Remova 'timestamps: false' se sua tabela tiver colunas de timestamps
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('teachers', null, {});
  },
};
