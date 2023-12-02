module.exports = (sequelize, DataTypes) => {
  const Teacher = sequelize.define(
    'Teacher',
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      name: DataTypes.STRING,
      registration: DataTypes.STRING,
    },
    {
      timestamps: false,
      tableName: 'teachers',
    }
  );

  Teacher.associate = (models) => {
    models.Teacher.hasMany(models.Course, {
      foreignKey: 'teacherId',
      as: 'courses'
    });
  };
  return Teacher;
};
