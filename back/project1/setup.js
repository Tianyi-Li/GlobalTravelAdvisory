const dbRtns = require("./dbroutines");
const { rawdata, alerturl, alertcollection } = require("./config");

const processDb = async () => {
  try {
    db = await dbRtns.loadDB();
    let results = await dbRtns.deleteAll(db, alertcollection);
    
    var result = "";
    result +=  `Deleted ${results.deletedCount} existing documents from the alerts collection. `;
    let ISOData = await dbRtns.getJSONFromWWWPromise(rawdata);
    let alertData = await dbRtns.getJSONFromWWWPromise(alerturl);
    if (ISOData !== undefined && alertData !== undefined) {
      result += "Retrieved Alert JSON from remote web site.";
      result += "Retrieved Country JSON from remote web site.";
    }
    var countryArray = new Array();
    for (let index in ISOData) {
      var cObj = new Object();
      cObj.country = ISOData[index]["alpha-2"];
      cObj.name = ISOData[index].name;
      let code_ = ISOData[index]["alpha-2"];
      if (alertData.data[code_] === undefined) {
        cObj.text = "No travel alerts";
        cObj.date = "";
      } else {
        cObj.text = alertData.data[code_].eng["advisory-text"];
        cObj.date = alertData.data[code_]["date-published"].date;
      }
      cObj.region = ISOData[index].region;
      cObj.subregion = ISOData[index]["sub-region"];
      countryArray.push(cObj);
    }
    await Promise.allSettled(
      countryArray.map(async country => {
        let results = await dbRtns.addOne(db, alertcollection, country);
      })
    );

    let allDbCountries = await dbRtns.findAll(db, alertcollection, {}, {});
    result += `Added approximately ${allDbCountries.length} new documents to the alerts collection.`;
  } catch (err) {
    console.log(err);
  } finally {
    return result;
    
  }
};

processDb();

module.exports = {
  processDb
}

