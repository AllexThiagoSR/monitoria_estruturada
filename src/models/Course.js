module.exports = (sequelize, DataTypes) => {
  const Course = sequelize.define(
    'Course',
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      description: DataTypes.STRING,
      name: DataTypes.STRING,
      duration: DataTypes.INTEGER,
      value: DataTypes.INTEGER,
      teacherId: {
        type: DataTypes.INTEGER,
        foreignKey: true,
      },
    },
    {
      timestamps: false,
      underscored: true,
      tableName: 'courses',
    }
  );

  Course.associate = (models) => {
    models.Course.belongsTo(models.Teacher, {
      foreignKey: 'teacherId',
      as: 'teacher',
    });
  }
  return Course;
};
