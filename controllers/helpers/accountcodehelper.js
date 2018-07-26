function customizeCode(original, options) {
  // separate original code
  const values = original.split("-");
  // console.log(`values: ${values} fund: ${values[0]}`);
  // console.log(`original code: ${original}`);

  const code = {
    fund: values[0],
    function: values[1],
    account: values[2],
    subobject: values[3],
    organization: values[4],
    fiscalYear: values[5],
    pic: values[6],
    region: values[7],
    division: values[8],
    subfund: values[9]
  };

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
    code.subobject,
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
  console.log(`jSon ${jsonData[0].accountCode}`);
  const jsonDataCopy = JSON.parse(JSON.stringify(jsonData)); // deep copy jsonData
  const results = jsonDataCopy.map((data) => {
    data.accountCode = customizeCode(data.accountCode, resultOptions);
    return data;
  });
  console.log(`results ${results[0].accountCode}`);
  return results;
}
module.exports = getAllCodes;
