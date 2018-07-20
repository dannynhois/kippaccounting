const axios = require("axios");
const fs = require("fs");
const CodingSolutionVM = require("../models/CodingSolution");
const AccountCode = require("../models/AccountCode");
const getAllCodes = require("./helpers/accountcodehelper");
/**
 * GET /codingsolution
 * Coding solution page.
 */

exports.getCodingSolution = (req, res) => {
  const unknownUser = !req.user;
  const options = req.query;
  // console.log(`params ${JSON.stringify(options)}`);

  // set defaults
  options.fund = options.fund || "420";
  options.func = options.func || "41";
  options.account = options.account || "6200";
  options.subobject = options.subobject || "00";
  options.organization = options.organization || "999";
  options.fiscalYear = options.fiscalYear || "8";
  options.pic = options.pic || "xx";
  options.region = options.region || "01";
  options.division = options.division || "111";
  options.subfund = options.subfund || "00000";

  const codes = getAllCodes(options);
  // console.log(codes);
  // console.log(`options ${JSON.stringify(options)}`);

  res.render("codingsolution", {
    title: "Coding Solution",
    funds: ["420", "199", "211"],
    divisions: ["111", "222", "333"],
    codes,
    unknownUser,
    selection: options
  });
};

exports.seedDatabaseCodingSolution = (req, res) => {
  const unknownUser = !req.user;

  // let test = new CodingSolutionVM(jsonData[1]);
  const values = jsonData[1].accountCode.split("-");
  const record = {
    fund: values[0],
    function: values[1],
    account: `${values[2]}-${values[3]}`,
    organization: values[4],
    fiscalYear: values[5],
    pic: values[6],
    region: values[7],
    division: values[8],
    subfund: values[9]
  };
  console.log(record);
  const test = new AccountCode(record);
  // test.code = jsonData[1].accountCode;
  // test.code = jsonData[1].accountCode;
  test.save();
  console.log(test);
  console.log(test.code);
  test.update({ fund: "ddd" });
  console.log(`new test: ${test.code}`);

  const newObject = AccountCode.findById("5b4c100fa2231f5dc09d3db8", (err, response) => {
    if (err) console.log(err);
    console.log(`response code: ${response.code}`);
    return response.toObject();
  });
  newObject.fund = "fun";
  console.log(`new object: ${newObject.account}`);
  console.log(`new object: ${newObject.fund}`);

  res.render("codingsolution", {
    title: "Coding Solution",
    unknownUser
  });
};

exports.getDataForDatatables = (req, res) => {
  const params = req.params;
  const data = getAllCodes(params);
  // data = { temp: "fake" };
  res.send(data);
};