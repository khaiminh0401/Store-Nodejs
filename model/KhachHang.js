const mongoose = require('mongoose');

let schema = new mongoose.Schema({
    makh: String,
    tenkh: String,
    gioitinh: Number,
    sdt: String,
    email: String,
    diachi: String,
    matkhau: String
}, {
    versionKey: false
});

module.exports = mongoose.model("khachhang", schema);