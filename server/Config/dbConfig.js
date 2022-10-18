const mongoose = require("mongoose");
// require('dotenv').config()
const mongourl = process.env.MONGOURL;
const db = () => {
console.log(mongourl);

  mongoose
    .connect(mongourl)
    .then((res) => {
      console.log(res.connection.host);
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = db;