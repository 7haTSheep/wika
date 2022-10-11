const mongoose = require("mongoose");

const ContactSchema = mongoose.Schema(
    {
        FirstName: {type: String,},
        LastName: {type: String,},
        PhoneNumber: {type: Number,},
        DoB: {type: Date,},
        Address: {type: String,},
    }
);

module.exports = mongoose.model("contact", ContactSchema);