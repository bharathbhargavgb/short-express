var express = require('express');
var axios = require('axios');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index.html');
});

router.post('/', function(req, res) {
  console.log("request received");
  axios({
    method: 'post',
    data: req.body,
    url: 'https://angh4tqiu8.execute-api.us-east-1.amazonaws.com/staging/shorten',
    responseType: "stream",
    headers: {
      'Content-Type': 'application/json'
    }
  }).then((axiosResponse) => {
    axiosResponse.data.pipe(res);
  });
});

module.exports = router;
