const db = require("..");

const { sequelize } = db;

const DataTypes = db.Sequelize;

module.exports = sequelize.define(
  "bills",
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      allowNull: false,
      unique: true,
    },
    dataItems: {
      type: DataTypes.ARRAY(DataTypes.JSON),
      allowNull: false,
    },
    status: {
      type: DataTypes.STRING,
      defaultValue: "Pending",
    },
  },
  { timestamps: true }
);
