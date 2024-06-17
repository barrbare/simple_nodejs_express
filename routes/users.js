var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  console.log("query params", req.query)
  res.status(200).json({message: "hi from server"})
});

router.get('/test', (req, res) => {
  console.log("11111", req.body)
  res.status(200).json({
    firstName: 'barbare',
    lastName: 'quqishvili'
  })
});

module.exports = router;
