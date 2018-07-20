function customizeCode(original, options) {
  // separate original code
  const values = original.split("-");
  // console.log(`values: ${values} fund: ${values[0]}`);

  const code = {};
  code.fund = values[0];
  code.function = values[1];
  code.account = values[2];
  code.subobject = values[3];
  code.organization = values[4];
  code.fiscalYear = values[5];
  code.pic = values[6];
  code.region = values[7];
  code.division = values[8];
  code.subfund = values[9];

  //
  if (code.fund === "xxx") code.fund = options.fund;
  if (code.organization === "xxx") code.organization = options.organization;
  if (code.fiscalYear === "x") code.fiscalYear = options.fiscalYear;
  if (code.region === "xx") code.region = options.region;
  if (code.division === "xxx") code.division = options.division;
  if (code.subfund === "xxxxx") code.subfund = options.subfund;

  // return new code
  const fullcode = [
    code.fund,
    code.function,
    code.account,
    code.organization,
    code.fiscalYear,
    code.pic,
    code.region,
    code.division,
    code.subfund
  ].join("-");
  return fullcode;
}
function getAllCodes(options) {
  // set defaults
  const resultOptions = {};
  resultOptions.fund = options.fund || "420";
  resultOptions.func = options.func || "41";
  resultOptions.account = options.account || "6200";
  resultOptions.subobject = options.subobject || "00";
  resultOptions.organization = options.organization || "999";
  resultOptions.fiscalYear = options.fiscalYear || "8";
  resultOptions.pic = options.pic || "xx";
  resultOptions.region = options.region || "01";
  resultOptions.division = options.division || "111";
  resultOptions.subfund = options.subfund || "00000";
  const jsonData = require("../../public/js/codingsolution/codingSolutionJson20180718.json");
  console.log(jsonData[0].accountCode);
  const results = jsonData.map((data) => {
    // console.log(code);
    data.accountCode = customizeCode(data.accountCode, resultOptions);
    return data;
  });
  console.log(results[0].accountCode);
  return results;
}
module.exports = getAllCodes;
