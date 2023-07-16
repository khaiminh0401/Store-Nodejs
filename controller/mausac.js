const mausac = require("../model/mausac");

module.exports = {
    getByMaSP:async(req,res)=>{
        try {
            const result = await mausac.find({masp:req.params.masp});
            res.json(result);
        } catch (error) {
            console.log(error);
        }
    }
}