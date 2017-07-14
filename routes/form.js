var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  var count = req.param('add');

  function counter(n) {
    return n ? n * counter(n - 1): 1;
  }
  var result = counter(count);
  res.render('form-res', {
    num: count,
    result : result
  });
});

module.exports = router;