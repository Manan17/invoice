const express = require("express");
const app = express();
const port = 3001;
const db = require("./database/index");
const {
  createInvoice,
  getAllData,
  updateStatus,
  getAllCusData,
  totalSales,
} = require("./controllers/create");
app.use(express.json());

db.connectDb();
// db.alterDB();
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/createBill", createInvoice);
app.get("/details", getAllData);
app.patch("/update", updateStatus);
app.get("/getAllCusData", getAllCusData);
app.get("/totalSales", totalSales);
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
