const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    magiohang: String,
    masp: String,
    mamau: Number,
    soluong: Number,
    makh: String
}, { collection: "giohangs", versionKey: false });

module.exports = mongoose.model("giohang", schema);