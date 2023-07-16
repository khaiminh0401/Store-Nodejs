const mausac = require('../model/mausac.js');
const SanPham = require('../model/SanPham.js');
module.exports = {
    getAll:async(req,res)=>{
        const result = await SanPham.find();
        res.json(result);
    },
    getByTenSP:async(req,res)=>{
        const tensp = req.params.tensp;
        let result = await SanPham.aggregate([
            {
                $lookup:{
                    from:'mausacs',
                    localField:'masp',
                    foreignField:'masp',
                    as:'colors'
                }
            },{
                $match:{
                    $and:[{tensp:tensp}]
                }
            }
        ])
        // console.log(result);
        // const mau = await mausac.findOne({masp:result.masp});
        // result = {...result,mausac:mau};
        // console.log(result);
        res.json(result);
    },
    getById:async(req,res)=>{
        const id = req.params.sp;
        const result = await SanPham.findOne({maps:id});
        res.json(result);
    },
    getByTH:async(req,res)=>{
        const id = req.params.th;
        const result = await SanPham.find({mathuonghieu:id});
        res.json(result);
    }
}