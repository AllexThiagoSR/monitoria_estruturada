module.exports = {
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkInsert(
      'students',
      [
        {
          id: 1,
          name: 'Estudante 1',
          ativo: 'Sim',
          registration: '001',
        },
        {
          id: 2,
          name: 'Estudante 2',
          ativo: 'Não',
          registration: '002',
        },
        // Adicione mais estudantes conforme necessário
      ],
      { timestamps: false }
    ); // Remova 'timestamps: false' se sua tabela tiver colunas de timestamps
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('students', null, {});
  },
};
