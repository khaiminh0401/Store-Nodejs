const express = require('express');
const KhachHang = require("../controller/Khachhang.js");
const router = express.Router();
router.get("/",KhachHang.getAll);
router.get("/checkLogin",KhachHang.checkLogin)
router.post("/register",KhachHang.register)
module.exports = router;