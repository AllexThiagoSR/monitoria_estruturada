module.exports = (sequelize, DataTypes) => {
  const Classe = sequelize.define(
    'Classe',
    {
      courseId: {
        allowNull: false,
        foreignKey: true,
        type: DataTypes.INTEGER,
      },
      studentId: {
        allowNull: false,
        foreignKey: true,
        type: DataTypes.INTEGER,
      }
    },
    {
      timestamps: false,
      underscored: true,
      tableName: 'classes',
      primaryKey: ['courseId', 'studentId'],
    }
  );

  Classe.associate = (models) => {
    // Associação entre Course e Student através de Classes
    models.Course.belongsToMany(models.Student, {
      through: Classe,
      foreignKey: 'courseId',
      otherKey: 'studentId',
      as: 'students',
    });

    // Associação entre Student e Course através de Classes
    models.Student.belongsToMany(models.Course, {
      through: Classe,
      foreignKey: 'studentId',
      otherKey: 'courseId',
      as: 'courses',
    });
  };

  return Classe;
};
