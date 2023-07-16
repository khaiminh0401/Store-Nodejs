const express = require('express');
const thuonghieu = require('../controller/thuonghieu');

const router = express.Router();

router.get("/",thuonghieu.getAll);

module.exports = router;