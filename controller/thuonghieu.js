const thuonghieu = require("../model/thuonghieu");

module.exports = {
    getAll:async(req,res)=>{
        try {
            const result = await thuonghieu.find();
            res.json(result);
        } catch (error) {
            console.log(error);
        }
    }
}