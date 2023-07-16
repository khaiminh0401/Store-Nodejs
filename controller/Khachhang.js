const KhachHang = require("../model/KhachHang.js");
const url = require('url');
const {v4:uuid} = require('uuid');
module.exports = {
    getAll:async(req,res)=>{
        const result = await KhachHang.find({});
        res.json(result);
    },
    checkLogin:async(req,res) =>{
        const result = await KhachHang.findOne(req.query);
        res.json(result);
    },
    register:async (req,res) =>{
        const value = {...req.body,makh:uuid()};
        const result = new KhachHang(value);
        result.save();
        res.json(0);
    }
}