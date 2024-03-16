const Customer = require("./customer");
const Bill = require("./bill");

Customer.hasMany(Bill, { as: "bills", foreignKey: "customerId" });
Bill.belongsTo(Customer, { as: "owner", foreignKey: "customerId" });

module.exports = {
  ...Customer,
  ...Bill,
};
