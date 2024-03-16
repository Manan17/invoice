const Bill = require("../database/models/bill");
const Customer = require("../database/models/customer");

exports.createInvoice = [
  async (req, res) => {
    try {
      let { ...body } = req?.body;
      console.log(body);
      if (!body?.customer_id) {
        let cust;
        cust = await Customer.create();
        console.log(cust);
        body["customer_id"] = cust.id;
      }

      let bill = await Bill.create({
        ...body,
        customerId: "01fd9fad-86e9-4ee1-a68e-02db89620894",
      });
      let bill2 = await Bill.findByPk("3ee6bcf7-6370-4ab0-8df6-cd5a478a7013");
      return res.status(200).json({
        bill,
        bill2,
      });
    } catch (e) {
      console.log(e);
      return res.status(400).json({
        e,
      });
    }
  },
];

exports.getAllData = [
  async (req, res) => {
    try {
      let { ...body } = req?.body;
      let bill = await Bill.findByPk(body.invoice_id);
      let total = 0;
      bill.dataValues.dataItems.map((b) => {
        total += b.price;
      });
      return res.status(200).json({
        bill,
        total,
      });
    } catch (e) {
      console.log(e);
      return res.status(400).json({
        e,
      });
    }
  },
];

exports.updateStatus = [
  async (req, res) => {
    try {
      let { ...body } = req?.body;
      let bill = await Bill.update(
        { status: "Paid" },
        { where: { id: body.invoice_id } }
      );

      return res.status(200).json({
        bill,
        message: "Updated",
      });
    } catch (e) {
      console.log(e);
      return res.status(400).json({
        e,
      });
    }
  },
];

exports.getAllCusData = [
  async (req, res) => {
    try {
      let { ...body } = req?.body;
      let bills = await Bill.findAll(body.customerId);

      return res.status(200).json({
        bills,
      });
    } catch (e) {
      console.log(e);
      return res.status(400).json({
        e,
      });
    }
  },
];

exports.totalSales = [
  async (req, res) => {
    try {
      let { ...body } = req?.body;
      let bills = await Bill.findAll(body.customerId);
      let total = 0;
      bills.map((b) => {
        b.dataValues.dataItems.map((d) => {
          total += d.price;
        });
      });
      return res.status(200).json({
        total,
      });
    } catch (e) {
      console.log(e);
      return res.status(400).json({
        e,
      });
    }
  },
];
