const express = require('express');
const loaisanpham = require('../controller/loaisanpham');

const router = express.Router();

router.get("/",loaisanpham.getAll);

module.exports = router;