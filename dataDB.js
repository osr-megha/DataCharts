require("dotenv").config();
const connectDB = require('./db/connect');

const Data = require('./models/dataModel');

const DataJson = require('./data.json');

const start = async() =>{
try {
    await connectDB(process.env.MONGOBD_URL);
    await Data.create(DataJson);
    console.log("success");
} catch (error) {
    console.log(error.message);
        res.status(500).json({message:error.message})
}
};


start();
