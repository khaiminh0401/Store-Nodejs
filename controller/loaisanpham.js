const loaisanpham = require("../model/loaisanpham");

module.exports = {
    getAll:async(req,res) =>{
        try {
            const result = await loaisanpham.find();
            res.json(result);
        } catch (error) {
            console.log(error);
        }
    }
}