const mongoose = require('mongoose');

const schema = mongoose.Schema({
    masp:String,
    tensp:String,
    giasp:Number,
    ngayramat:String,
    mathuonghieu:String,
    maloai:String,
    hinhanh:String,
    thongsokythuat:Object
});


module.exports = mongoose.model("sanpham",schema);;