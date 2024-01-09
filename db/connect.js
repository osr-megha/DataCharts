const mongoose = require("mongoose");
// const uri = "mongodb+srv://megha:admin123@cluster0.4t6mbj9.mongodb.net/collectedData?retryWrites=true&w=majority"

const connectDB = (uri) =>{
    console.log("connected to mongoDB");
    return mongoose.connect(uri);
};

module.exports = connectDB;