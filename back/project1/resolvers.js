const dbRtns = require("./dbroutines");
const { alertcollection } = require("./config");
const { advisorycollection } = require("./config");
const setalert = require("./setup");

const resolvers = {
  setupalerts: async () => {
    let data = await setalert.processDb();
    console.log(data);
    return data;
  },
  alerts: async () => {
    let db = await dbRtns.loadDB();
    return await dbRtns.findAll(db, alertcollection, {}, {});
  },
  alertsforregion: async args => {
    let db = await dbRtns.loadDB();
    return await dbRtns.findAll(
      db,
      alertcollection,
      { region: args.region },
      {}
    );
  },
  alertsforsubregion: async args => {
    let db = await dbRtns.loadDB();
    return await dbRtns.findAll(
      db,
      alertcollection,
      { subregion: args.subregion },
      {}
    );
  },
  regions: async () => {
    let db = await dbRtns.loadDB();
    let results = await dbRtns.findAll(db, alertcollection, {}, {});
    let arr = results.map(x => x.region);
    const resultSet = new Set();
    arr.forEach(x => resultSet.add(x));
    return resultSet;
  },
  subregions: async () => {
    let db = await dbRtns.loadDB();
    let results = await dbRtns.findAll(db, alertcollection, {}, {});
    let arr = results.map(x => x.subregion);
    const resultSet = new Set();
    arr.forEach(x => resultSet.add(x));
    return resultSet;
  },
  postadvisory: async args => {
    let db = await dbRtns.loadDB();
    // This new Date is only for getting the month in 2 digit format
    var usaTime = new Date().toLocaleString("en-US", {
      timeZone: "America/New_York"
    });
    usaTime = new Date(usaTime);

    var timeStr = new Date() + 3600000 * -5.0;
    var timeArr = timeStr.split(" ");
    var timeinput =
      timeArr[3] +
      "-" +
      ("0" + usaTime.toLocaleString()[0]).slice(-2) +
      "-" +
      timeArr[2] +
      " " +
      timeArr[4];

    // get all alerts add the specified alert infor to mongodb
    let alerts = await dbRtns.findAll(db, alertcollection, {}, {});
    let alertObj = alerts.find(element => element.name === args.name);
    let alertInfo = alertObj.text;

    let advisory = {
      travellername: args.travellername,
      name: args.name,
      date: timeinput,
      text: alertInfo
    };
    let results = await dbRtns.addOne(db, advisorycollection, advisory);
    return results.insertedCount === 1 ? advisory : null;
  },
  countries: async () => {
    let db = await dbRtns.loadDB();
    let results = await dbRtns.findAll(db, alertcollection, {}, {});
    let arr = results.map(x => x.name);
    const resultSet = new Set();
    arr.forEach(x => resultSet.add(x));
    return resultSet;
  },
  advisories: async () => {
    let db = await dbRtns.loadDB();
    return await dbRtns.findAll(db, advisorycollection, {}, {});
  },
  travellers: async () => {
    let db = await dbRtns.loadDB();
    let results = await dbRtns.findAll(db, advisorycollection, {}, {});
    let arr = results.map(x => x.travellername);
    const resultSet = new Set();
    arr.forEach(x => resultSet.add(x));
    return resultSet;
  },
  alertsfortravellers: async args => {
    let db = await dbRtns.loadDB();
    return await dbRtns.findAll(
      db,
      advisorycollection,
      { travellername: args.travellername },
      {}
    );
  },
};

module.exports = { resolvers };
