const request = require("request");

const getJSONFromWWWPromise = url => {
  return new Promise((resolve, reject) => {
    request(url, (err, res, body) => {
      if (err) {
        reject(err);
        return;
      }
      resolve(JSON.parse(body));
    });
  });
};

module.exports = {
  getJSONFromWWWPromise
};
