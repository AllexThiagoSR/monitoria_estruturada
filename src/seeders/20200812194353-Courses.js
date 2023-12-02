module.exports = {
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkInsert(
      'courses',
      [
        {
          description: 'Curso de Ciência da Computação',
          name: 'Introdução à Programação',
          duration: 180, // Duração em horas
          value: 400, // Valor em moeda local
          teacher_id: 1,
        },
        {
          description: 'Curso de Engenharia de Software',
          name: 'Desenvolvimento Ágil',
          duration: 200,
          value: 450,
          teacher_id: 1,
        },
        {
          description: 'Curso de Análise e Desenvolvimento de Sistemas',
          name: 'Banco de Dados',
          duration: 160,
          value: 350,
          teacher_id: 2,
        },
        {
          description: 'Curso de Redes de Computadores',
          name: 'Redes e Segurança',
          duration: 140,
          value: 300,
          teacher_id: 2,
        },
        {
          description: 'Curso de Inteligência Artificial',
          name: 'Fundamentos de IA',
          duration: 220,
          value: 550,
          teacher_id: 1,
        },
      ],
      { timestamps: false }
    );
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('courses', null, {});
  },
};
