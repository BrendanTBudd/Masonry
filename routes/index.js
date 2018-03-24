var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Classic Masonry Home' });
});

router.get('/Gallery', function(req, res, next) {
    res.render('Gallery', { title: 'Classic Masonry Gallery' });
});

router.get('/About', function(req, res, next) {
    res.render('About', { title: 'Classic Masonry About' });
});

router.get('/Contact', function(req, res, next) {
    res.render('Contact', { title: 'Classic Masonry Contact' });
});

exports.Contact = function(req, res){
    res.render('Contact', {title:'Classic Masonry Contact', page: 'Contact'})
};



router.post('/Contact', function (req, res) {
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: "masonryemail@gmail.com",
            pass: "masonry1234"
        }
    });

    var mailOptions = {
        from: 'masonryemail@gmail.com',
        to: 'M3challenger40@gmail.com',
        subject: 'Inquire',
        text: req.body.Name + "\n" + req.body.Email + "\n" + req.body.phoneNum + "\n" + req.body.message
    };
    // transporter.sendMail(mailOptions, function (error, response) {
    //     //Email not sent
    //     if (error) {
    //         res.render('Contact', { title: 'Classic Masonry Contact', msg: 'Error occured, message not sent.', err: true, page: 'Contact' })
    //     }
    //     //Yay!! Email sent
    //     else {
    //         res.render('Contact', { title: 'Classic Masonry Contact', msg: 'Message sent! Thank you.', err: false, page: 'Contact' })
    //     }
    // });
    transporter.sendMail(mailOptions, function(error, info) {
        if(error){
            console.log(error)
        }
        else{
            console.log('Email sent: ' + info.response);
        }
    });
    res.render('Contact',{message:"Email sent!"});
});


module.exports = router;
