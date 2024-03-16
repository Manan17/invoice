const db = require("..");

const { sequelize } = db;

const DataTypes = db.Sequelize;

module.exports = sequelize.define(
  "customer",
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      allowNull: false,
      unique: true,
    },
  },
  { timestamps: true }
);
