const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    maloai: String,
    tenloai: String
});


module.exports = mongoose.model("loaisanpham",schema);