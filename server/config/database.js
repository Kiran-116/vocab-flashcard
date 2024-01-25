// const dotenv = require('dotenv');
// dotenv.config();

const mongoose = require("mongoose");

const connectDatabase = () => {
    try {
        mongoose.connect("mongodb://127.0.0.1:27017/VocabularyFlashcard", 
        {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        .then(
            (data) => {
                console.log('Database connected');
            }
        )
    }
    catch (err) {
        console.log("Database connection failed (Error) !!!");
        console.log(err);
    }
};

module.exports = connectDatabase;