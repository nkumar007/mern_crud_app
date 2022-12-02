const mongoose = require("mongoose");

exports.connectToDB = () => {
  mongoose
    .connect(process.env.MONGO_URI, { useNewUrlParser: true })
    .then((conn) => {
      console.log(`Connected to DB: ${conn.connection.host}`);
    })
    .catch((error) => {
      console.log(error.message);
      process.exit(1);
    });
};
