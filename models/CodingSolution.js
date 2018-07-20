const mongoose = require("mongoose");
const AccountCode = require("./AccountCode");

const CodingSolutionSchema = new mongoose.Schema({
  description: String,
  accountCode: { type: mongoose.Schema.Types.ObjectId, ref: "AccountCode" },
  reportCategory: String,
  notes: String
});

const CodingSolution = mongoose.model("CodingSolution", CodingSolutionSchema);

module.exports = CodingSolution;
