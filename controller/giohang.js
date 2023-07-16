const giohang = require("../model/giohang.js");
const uuid = require('uuid').v4;
module.exports = {
    getAll: async (req, res) => {
        const result = await giohang.find();
        res.json(result);
    },
    getByMaKH: async (req, res) => {

        const result = await giohang.aggregate([
            {
                $lookup: {
                    from: 'sanphams',
                    localField: 'masp',
                    foreignField: 'masp',
                    as: 'details_sp'
                }
            },
            {
                $unwind: '$details_sp'
            },
            {
                $lookup: {
                    from: 'mausacs',
                    localField: 'mamau',
                    foreignField: 'mamau',
                    as: 'details_color'
                }
            },
            {
                $unwind: '$details_color'
            },
            {
                $match: {
                    $and: [{ makh: req.params.makh }]
                }
            },
            {
                $project: {
                    masp: 0,
                    mamau: 0
                }
            }
        ]);
        res.json(result);
    },
    insert: async (req, res) => {
        try {
            const result = { magiohang: uuid(), ...req.body };
            // console.log(result);
            const cart = new giohang(result);
            cart.save();
            res.status(200).json("Inser success");
        } catch (error) {
            console.log(error);
            res.status(500);
        }

    },
    delete: async (req,res)=>{
        try {
            await giohang.findOneAndDelete({magiohang:req.params.magiohang});
            res.json("delete thành công");
        } catch (error) {
            console.log(error);
        }
    },
    updateSoLuong: async (req,res)=>{
        try {
            console.log(req);
            await giohang.updateOne({magiohang:req.query.magiohang},{soluong:req.query.soluong});
            res.json("update thành công");

        } catch (error) {
            console.log(error);
        }
    }
}