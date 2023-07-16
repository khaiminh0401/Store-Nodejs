const ct_sanpham = require("../model/ct_sanpham.js");

module.exports = {
    getAll:async(req,res)=>{
        try {    
            const result = await ct_sanpham.find();
            res.json(result);
        } catch (error) {
            console.log(error);
        }

    },
    insertAll: async(req,res)=>{
    }
}