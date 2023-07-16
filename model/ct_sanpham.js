const mongoose = require('mongoose');

const schema = mongoose.Schema({
    mactsp:Number,
    masp:String,
    macn:String,
    mamau:Number,
    soluong:Number
});

module.exports = mongoose.model("ct_sanpham",schema);