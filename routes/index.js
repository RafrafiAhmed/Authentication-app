const express = require('express');
const router = express.Router();
const user=require('../controllers/userController')

router.get('/', function(req, res, next) {
  res.redirect('/api/login');
});
router.route("/api/update/profile/:id").put((req, res) => {
  user.updateUser(req.params.id, req.body).then((data) => {
    res.send(data);
  });
  
});
module.exports = router;
 