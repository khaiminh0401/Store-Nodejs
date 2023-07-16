const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const Cors = require('cors');
const mongoose = require('mongoose');

const sanpham = require('./router/sanpham.js');
const Khachhang = require('./router/khachhang.js');
const ct_sanpham = require('./router/ct_sanpham.js');
const loaisanpham = require("./router/loaisanpham.js");
const thuonghieu = require("./router/thuonghieu.js");
const mausac = require('./router/mausac.js');
const giohang = require('./router/giohang.js');
// const vnpay = require("./router/vnpay.js");
mongoose.set('strictQuery', false);

const MONGOSEE = "mongodb+srv://admin:04012003@cluster0.ma8mndh.mongodb.net/BanHang?retryWrites=true&w=majority";
const PORT = 3400

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))


app.use(Cors());
app.use("/kh", Khachhang);
app.use("/sp", sanpham);
app.use("/ct_sp", ct_sanpham);
app.use("/loaisp", loaisanpham);
app.use("/th", thuonghieu);
app.use("/mausac", mausac);
app.use("/cart", giohang);


mongoose.connect(MONGOSEE, { useNewUrlParser: true, useUnifiedTopology: true, })
    .then(() => {
        app.listen(PORT, function () {
            console.log("success at http://localhost:3400")
        })
    });


