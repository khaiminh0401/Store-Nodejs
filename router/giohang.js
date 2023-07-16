const express = require('express');
const giohang = require('../controller/giohang.js');

const router = express.Router();

router.get("/",giohang.getAll)
    .get("/:makh",giohang.getByMaKH);
router.post("/insert",giohang.insert)

router.put("/updateSoLuong",giohang.updateSoLuong)

router.delete("/delete/:magiohang",giohang.delete)
module.exports = router;