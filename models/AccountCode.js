const mongoose = require("mongoose");

const AccountCodeSchema = new mongoose.Schema({
  fund: {
    type: String,
    match: /\d{3}/
  },
  function: {
    type: String,
    match: /\d{2}/
  },
  account: {
    type: String,
    match: /\d{4}-\d{2}/
  },
  organization: {
    type: String,
    match: /\d{3}/
  },
  fiscalYear: {
    type: String,
    match: /\d{1}/
  },
  pic: {
    type: String,
    match: /\d{2}/
  },
  region: {
    type: String,
    match: /\d{2}/
  },
  division: {
    type: String,
    match: /\d{3}/
  },
  subfund: {
    type: String,
    match: /\d{5}/
  }
});

AccountCodeSchema.virtual("code").get(function () {
  const fullcode = [
    this.fund,
    this.function,
    this.account,
    this.organization,
    this.fiscalYear,
    this.pic,
    this.region,
    this.division,
    this.subfund
  ].join("-");
  return fullcode;
});
// .set((v) => {
//   const values = v.split("-");
//   console.log(`values: ${values} fund: ${values[0]}`);

//   this.fund = values[0];
//   this.function = values[1];
//   this.account = values[2];
//   this.subobject = values[3];
//   this.organization = values[4];
//   this.fiscalYear = values[5];
//   this.pic = values[6];
//   this.region = values[7];
//   this.division = values[8];
//   this.subfund = values[9];
// });

// AccountCodeSchema.virtual("code").set((accountCode) => {
//   [
//     this.fund,
//     this.function,
//     this.account,
//     this.organization,
//     this.fiscalYear,
//     this.pic,
//     this.region,
//     this.division,
//     this.subfund
//   ] = accountCode.split("-");
// });

const AccountCode = mongoose.model("AccountCode", AccountCodeSchema);

module.exports = AccountCode;
