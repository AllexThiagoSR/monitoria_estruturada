module.exports = (sequelize, DataTypes) => {
  const Student = sequelize.define(
    'Student',
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      name: {
        type: DataTypes.STRING,
      },
      ativo: {
        type: DataTypes.STRING,
      },
      registration: {
        type: DataTypes.STRING,
      },
    },
    {
      timestamps: false, // remove o createdAt e updatedA
      underscored: true, // padroniza o nome das tabelas e colunas
      tableName: 'students',
    }
  );
  return Student;
};
