const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    mamau:Number,
    tenmau:String,
    masp:String,
    url:String
})

module.exports = mongoose.model("mausac",schema);