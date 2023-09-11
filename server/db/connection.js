const mongoose = require("mongoose")
//connecting to database(mongoDb)
const connectDb = async () => {
    try {
      const res = await mongoose.connect(process.env.MONGODB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
      if (res) console.log("connected to mongodb");
    } catch (err) {
      console.log(err);
    }
  };

  module.exports =connectDb;