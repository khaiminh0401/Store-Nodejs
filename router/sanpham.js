const express = require('express');
const SanPham = require("../controller/sanpham.js");
const router = express.Router();
router.get("/",SanPham.getAll)
router.get("/:tensp",SanPham.getByTenSP)
router.get("/getTH/:th",SanPham.getByTH)
module.exports = router;