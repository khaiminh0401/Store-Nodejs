const express = require('express');
const router = express.Router();
const { VNPay } = require('vn-payments');

const vnpay = new VNPay({
    paymentGateway: 'https://sandbox.vnpayment.vn/paymentv2/vpcpay.html',
    merchant: 'TESTVNPAY',
    secureSecret: 'IIJYFUQUFFTBOAIXZTFOUWTVMFYGLXQX'
});
router.post('/create_payment_url', function (req, res) {
    const params = Object.assign({}, req.query);
 
  // construct checkout payload from form data and app's defaults
  const checkoutData = {
    amount: parseInt(params.amount, 10),
    customerId: params.email,
    currency: 'VND',
    /*...*/
  };
  vnpay
    .buildCheckoutUrl(checkoutData)
    .then(checkoutUrl => {
      res.writeHead(301, { Location: checkoutUrl.href });
      res.end();
    })
    .catch(err => {
      res.send(err);
    });  
});
// Vui lòng tham khảo thêm tại code demo
module.exports = router;