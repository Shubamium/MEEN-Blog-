const mongoose = require("mongoose");
const dbURI =
  "mongodb://mongo:dvwjAKS3FcnYrdP7j7OK@containers-us-west-208.railway.app:6841";

async function connect(callback) {
  try {
    await mongoose.connect(dbURI);
    console.log("DB Connection established");
    callback && callback();
  } catch (err) {
    console.log("Error connecting to the database");
  }
}

module.exports = {
  connect,
};
