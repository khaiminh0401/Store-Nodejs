const express = require('express');
const mausac = require('../controller/mausac');

const router = express.Router();

router.get("/:masp",mausac.getByMaSP);

module.exports = router;