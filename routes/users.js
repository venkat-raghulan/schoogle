const express = require('express');
var router = express.Router();

var { User } = require('../models/User');
//get all vlaues from DB
router.get('/', (req, res) => {
    User.find((err, doc) => {
        if(!err){ 
            res.send(doc);
        }else{
            console.log("Error in Retrive User"+JSON.stringify(err,undefined,2));
        }
    });
});

router.get('/:id', (req, res) => {

    User.findById(req.params.username, (err, doc) => {
        if(!err){
            res.send(doc);
        }else{
            console.log("Error in retrive User"+JSON.stringify(err,undefined,2));
        }
    });

})


router.post('/',(req,res) => {
    var usr = new User({
        username : req.body.username,
        password : req.body.password,
        firstname : req.body.firstname,
        lastname: req.body.lastname,
        emailID : req.body.emailID,
        phoneNumber : req.body.phoneNumber,
        role : req.body.role,
    });
    usr.save((err,doc) => {
        if(!err){
           res.send(doc);
        }else{
            console.log("Error in insert User data"+JSON.stringify(err,undefined,2));
        }
    });
});


module.exports = router;