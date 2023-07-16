const express = require('express');
const ct_sanpham = require('../controller/ct_sanpham.js');
const router = express.Router();

router.get("/",ct_sanpham.getAll);

module.exports = router;