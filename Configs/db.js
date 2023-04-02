// require('dotenv').config()
// const mongoose = require('mongoose');
// mongoose.set('strictQuery', true);

// const dbconnetion = mongoose.connect(process.env.mongoURL)

// module.exports = {dbconnetion}


require('dotenv').config();
const mongoose = require('mongoose');
mongoose.set('strictQuery', true);

const connectDB = async () => {
  try {
    const dbConnection = await mongoose.connect(process.env.mongoURL);
    console.log(`Connected to Database`);
    return dbConnection;
  } catch (error) {
    console.log(`Error while connecting to ${error.message}`);
    throw error;
  }
};

module.exports = { connectDB };
