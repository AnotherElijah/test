var express = require('express');
var router = express.Router();
let User = require('./schemas/userSchema');

router.get('/register', function (req, res) {
    const newUser = new User({ name: 'Zildjian' });
    newUser.save().then(() => console.log('meow'));

    res.send('Test succeeded23');
});

module.exports = router;
