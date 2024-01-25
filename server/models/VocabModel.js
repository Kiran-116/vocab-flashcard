const mongoose = require("mongoose");

const VocabSchema = new mongoose.Schema({
    word:{
        type: String,
        required:[true,"Please Enter Word"],
        maxLength:[100,"Word cannot exceed 100 characters"],

    },
    meaning: {
        type: String,
        required: [true, "Please Enter Meaning"],
        maxLength:[100,"Meaning cannot exceed 100 characters"],
    },
    example: {
        type: String,
        required: [true, "Please Enter Example"],
        maxLength:[100,"Example cannot exceed 100 characters"],
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    user:{
        type:mongoose.Schema.ObjectId,
        ref:'User',
        // required:true,
    }
    
});

module.exports = mongoose.model('Vocab', VocabSchema);