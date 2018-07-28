const axios = require("axios");
const fs = require("fs");
const CodingSolutionVM = require("../models/CodingSolution");
const AccountCode = require("../models/AccountCode");
const getAllCodes = require("./helpers/accountcodehelper");

const getValuesForDropDown = () => {
  // http://www.convertcsv.com/csv-to-json.htm
  const funds = {
    190: {
      name: "Fund 190 - KPA, Fundraising, Student Activity",
      fund: "190",
      subfund: "00000"
    },
    197: {
      name: "Fund 197 - Above and Beyond",
      fund: "197",
      subfund: "00000"
    },
    199: {
      name: "Fund 199 - Tips, Taxes, No Agendas",
      fund: "199",
      subfund: "00000"
    },
    263: {
      name: "Fund 263 - Title 3",
      fund: "263",
      subfund: "00000",
      pic: "25"
    },
    410: {
      name: "Fund 410 - IMA (Textbook Funds)",
      fund: "410",
      subfund: "00000",
      pic: "11"
    },
    420: {
      name: "Fund 420 - Normal",
      fund: "420",
      subfund: "00000"
    }
  };

  const years = {
    9: {
      name: "18-19",
      year: "9"
    },
    8: {
      name: "17-18",
      year: "8"
    }
  };

  const schools = {
    austincollegiate: {
      key: "austincollegiate",
      name: "KIPP AUSTIN COLLEGIATE - 302",
      region: "02",
      division: "302",
      org: "001"
    },
    austinbrave: {
      key: "austinbrave",
      name: "KIPP AUSTIN BRAVE - 301",
      region: "02",
      division: "301",
      org: "002"
    },
    houstonhighschool: {
      key: "houstonhighschool",
      name: "KIPP HOUSTON High School - 304",
      region: "04",
      division: "304",
      org: "013"
    },
    generationscollegiate: {
      key: "generationscollegiate",
      name: "KIPP GENERATIONS COLLEGIATE - 303",
      region: "04",
      division: "303",
      org: "014"
    },
    northeastcollegepreparatory: {
      key: "northeastcollegepreparatory",
      name: "KIPP NORTHEAST COLLEGE PREPARATORY - 305",
      region: "04",
      division: "305",
      org: "015"
    },
    sunnysidehighschool: {
      key: "sunnysidehighschool",
      name: "KIPP SUNNYSIDE High School - 306",
      region: "04",
      division: "306",
      org: "016"
    },
    connecthighschool: {
      key: "connecthighschool",
      name: "KIPP CONNECT High School - 309",
      region: "04",
      division: "309",
      org: "017"
    },
    universityprephighschool: {
      key: "universityprephighschool",
      name: "KIPP UNIVERSITY PREP High School - 307",
      region: "05",
      division: "307",
      org: "020"
    },
    oakcliffacademy: {
      key: "oakcliffacademy",
      name: "KIPP OAK CLIFF ACADEMY - 308",
      region: "04",
      division: "308",
      org: "030"
    },
    austincollegeprep: {
      key: "austincollegeprep",
      name: "KIPP AUSTIN COLLEGE PREP - 208",
      region: "02",
      division: "208",
      org: "041"
    },
    "austinacademyofarts&letters": {
      key: "austinacademyofarts&letters",
      name: "KIPP AUSTIN ACADEMY OF ARTS & LETTERS - 203",
      region: "02",
      division: "203",
      org: "042"
    },
    austinbeaconprep: {
      key: "austinbeaconprep",
      name: "KIPP AUSTIN BEACON PREP - 206",
      region: "02",
      division: "206",
      org: "043"
    },
    austinvistamiddleschools: {
      key: "austinvistamiddleschools",
      name: "KIPP AUSTIN VISTA MIDDLE SCHOOLS - 222",
      region: "02",
      division: "222",
      org: "044"
    },
    academy: {
      key: "academy",
      name: "KIPP ACADEMY  - 202",
      region: "04",
      division: "202",
      org: "050"
    },
    "3dacademy": {
      key: "3dacademy",
      name: "KIPP 3D ACADEMY - 201",
      region: "04",
      division: "201",
      org: "051"
    },
    sharpstowncollegeprep: {
      key: "sharpstowncollegeprep",
      name: "KIPP SHARPSTOWN COLLEGE PREP - 219",
      region: "04",
      division: "219",
      org: "052"
    },
    polarisacademyforboys: {
      key: "polarisacademyforboys",
      name: "KIPP POLARIS ACADEMY FOR BOYS - 217",
      region: "04",
      division: "217",
      org: "053"
    },
    intrepidpreparatory: {
      key: "intrepidpreparatory",
      name: "KIPP INTREPID PREPARATORY - 212",
      region: "04",
      division: "212",
      org: "054"
    },
    voyageacademyforgirls: {
      key: "voyageacademyforgirls",
      name: "KIPP VOYAGE ACADEMY FOR GIRLS - 223",
      region: "04",
      division: "223",
      org: "055"
    },
    connecthoustonmiddle: {
      key: "connecthoustonmiddle",
      name: "KIPP CONNECT HOUSTON MIDDLE  - 209",
      region: "04",
      division: "209",
      org: "056"
    },
    liberationcollegepreparatory: {
      key: "liberationcollegepreparatory",
      name: "KIPP LIBERATION COLLEGE PREPARATORY - 213",
      region: "04",
      division: "213",
      org: "057"
    },
    spiritcollegeprep: {
      key: "spiritcollegeprep",
      name: "KIPP SPIRIT COLLEGE PREP - 220",
      region: "04",
      division: "220",
      org: "058"
    },
    academywest: {
      key: "academywest",
      name: "KIPP ACADEMY WEST  - 204",
      region: "04",
      division: "204",
      org: "059"
    },
    primecollegepreparatory: {
      key: "primecollegepreparatory",
      name: "KIPP PRIME COLLEGE PREPARATORY - 218",
      region: "04",
      division: "218",
      org: "060"
    },
    nexusmiddle: {
      key: "nexusmiddle",
      name: "KIPP NEXUS MIDDLE - 214",
      region: "04",
      division: "214",
      org: "061"
    },
    truthacademy: {
      key: "truthacademy",
      name: "KIPP TRUTH ACADEMY - 221",
      region: "03",
      division: "221",
      org: "071"
    },
    destinymiddleschool: {
      key: "destinymiddleschool",
      name: "KIPP DESTINY MIDDLE SCHOOL - 211",
      region: "03",
      division: "211",
      org: "072"
    },
    pleasantgrovemiddleschool: {
      key: "pleasantgrovemiddleschool",
      name: "KIPP PLEASANT GROVE MIDDLE SCHOOL - 215",
      region: "03",
      division: "215",
      org: "073"
    },
    aspireacademy: {
      key: "aspireacademy",
      name: "KIPP ASPIRE ACADEMY - 205",
      region: "05",
      division: "205",
      org: "081"
    },
    caminoacademy: {
      key: "caminoacademy",
      name: "KIPP CAMINO ACADEMY - 207",
      region: "05",
      division: "207",
      org: "082"
    },
    poderacademy: {
      key: "poderacademy",
      name: "KIPP PODER ACADEMY - 216",
      region: "05",
      division: "216",
      org: "083"
    },
    austincomunidad: {
      key: "austincomunidad",
      name: "KIPP AUSTIN COMUNIDAD - 102",
      region: "02",
      division: "102",
      org: "101"
    },
    austinconnectionselementary: {
      key: "austinconnectionselementary",
      name: "KIPP AUSTIN CONNECTIONS ELEMENTARY - 104",
      region: "02",
      division: "104",
      org: "102"
    },
    austinobras: {
      key: "austinobras",
      name: "KIPP AUSTIN OBRAS - 112",
      region: "02",
      division: "112",
      org: "103"
    },
    austinleadershipelementary: {
      key: "austinleadershipelementary",
      name: "KIPP AUSTIN LEADERSHIP ELEMENTARY - 109",
      region: "02",
      division: "109",
      org: "104"
    },
    shineprep: {
      key: "shineprep",
      name: "KIPP SHINE PREP - 116",
      region: "04",
      division: "116",
      org: "205"
    },
    dreamprep: {
      key: "dreamprep",
      name: "KIPP DREAM PREP - 106",
      region: "04",
      division: "106",
      org: "206"
    },
    sharpprep: {
      key: "sharpprep",
      name: "KIPP SHARP  PREP - 115",
      region: "04",
      division: "115",
      org: "207"
    },
    exploreacademy: {
      key: "exploreacademy",
      name: "KIPP EXPLORE ACADEMY - 108",
      region: "04",
      division: "108",
      org: "209"
    },
    legacypreparatory: {
      key: "legacypreparatory",
      name: "KIPP LEGACY PREPARATORY  - 110",
      region: "04",
      division: "110",
      org: "211"
    },
    connecthoustonprimary: {
      key: "connecthoustonprimary",
      name: "KIPP CONNECT HOUSTON PRIMARY - 103",
      region: "04",
      division: "103",
      org: "212"
    },
    peaceelementary: {
      key: "peaceelementary",
      name: "KIPP PEACE ELEMENTARY - 113",
      region: "04",
      division: "113",
      org: "213"
    },
    zenithacademy: {
      key: "zenithacademy",
      name: "KIPP ZENITH ACADEMY - 120",
      region: "04",
      division: "120",
      org: "214"
    },
    unityprimary: {
      key: "unityprimary",
      name: "KIPP UNITY PRIMARY - 119",
      region: "04",
      division: "119",
      org: "215"
    },
    climbacademy: {
      key: "climbacademy",
      name: "KIPP CLIMB ACADEMY - 101",
      region: "04",
      division: "101",
      org: "216"
    },
    nexusprimary: {
      key: "nexusprimary",
      name: "KIPP NEXUS PRIMARY - 111",
      region: "04",
      division: "111",
      org: "217"
    },
    destinyelementary: {
      key: "destinyelementary",
      name: "KIPP DESTINY ELEMENTARY - 105",
      region: "03",
      division: "105",
      org: "301"
    },
    truthelementary: {
      key: "truthelementary",
      name: "KIPP TRUTH ELEMENTARY - 117",
      region: "03",
      division: "117",
      org: "302"
    },
    pleasantgrovepri: {
      key: "pleasantgrovepri",
      name: "KIPP PLEASANT GROVE PRI - 114",
      region: "03",
      division: "114",
      org: "303"
    },
    unmundoduallanguageacademy: {
      key: "unmundoduallanguageacademy",
      name: "KIPP UN MUNDO DUAL LANGUAGE ACADEMY - 118",
      region: "05",
      division: "118",
      org: "401"
    },
    esperanzaduallanguageacademy: {
      key: "esperanzaduallanguageacademy",
      name: "KIPP ESPERANZA DUAL LANGUAGE ACADEMY - 107",
      region: "05",
      division: "107",
      org: "402"
    }
  };

  return {
    funds,
    schools,
    years
  };
};

/**
 * GET /codingsolution
 * Coding solution page.
 */

exports.getCodingSolution = (req, res) => {
  const unknownUser = !req.user;
  const options = req.query;
  const school = req.params.school || options.school || "austincollegiate";
  options.school = school;
  const dropdowns = getValuesForDropDown();
  console.log(school);

  // set defaults
  options.fund = options.fund || "420";
  options.func = options.func || "41";
  options.account = options.account || "6200";
  options.subobject = options.subobject || "00";
  options.organization = dropdowns.schools[school].org || options.organization || "999";
  options.fiscalYear = options.fiscalYear || "9";
  options.pic = dropdowns.funds[options.fund].pic || options.pic;
  options.region = dropdowns.schools[school].region || options.region || "01";
  options.division = dropdowns.schools[school].division || options.division || "111";
  options.subfund = dropdowns.funds[options.fund].subfund || options.subfund || "00000";

  const codes = getAllCodes(options);

  res.render("codingsolution", {
    title: "Coding Solution",
    dropdowns,
    codes,
    unknownUser,
    selection: options
  });
};

exports.seedDatabaseCodingSolution = (req, res) => {
  const unknownUser = !req.user;

  // let test = new CodingSolutionVM(jsonData[1]);
  const jsonData = require("../../public/js/codingsolution/codingSolutionJson20180718.json");
  jsonData.forEach((cs) => {
    const values = cs.accountCode.split("-");
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
  });

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
