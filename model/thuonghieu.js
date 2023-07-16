const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    mathuonghieu:String,
    tenthuonghieu:String,
    logo:String
});

module.exports = mongoose.model("thuonghieu",schema);