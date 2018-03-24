// var express = require('express');
// var router = express.Router();
// var nodemailer = require('nodemailer');
//
// router.post('/Contact', function (req, res) {
//     var transporter = nodemailer.createTransport({
//         service: 'gmail',
//         auth: {
//             user: "Brendan.t.budd@gmail.com",
//             pass: "Tunchilee12"
//         }
//     });
//
//     var mailOptions = {
//         from: 'Brendan.t.budd@gmail.com',
//         to: 'M3challenger40@gmail.com',
//         subject: 'Inquire',
//         text: req.body.Name + ' &lt;' + req.body.Email + '&gt;' + req.body.phoneNum + '&gt' + req.body.message
//     };
//     transporter.sendMail(mailOptions, function (error, response) {
//         //Email not sent
//         if (error) {
//             res.render('Contact', { title: 'Classic Masonry Contact', msg: 'Error occured, message not sent.', err: true, page: 'Contact' })
//         }
//         //Yay!! Email sent
//         else {
//             res.render('Contact', { title: 'Classic Masonry Contact', msg: 'Message sent! Thank you.', err: false, page: 'Contact' })
//         }
//     });
// });



// var transporter = nodemailer.createTransport({
//     service: 'gmail',
//     auth: {
//         user: 'Brendan.t.budd@gmail.com',
//         pass: ''
//     }
// });
//
// var mailOptions = {
//     from: 'Brendan.T.budd@gmail.com',
//     to: 'M3challenger40@gmail.com',
//     subject: 'Inquire',
//     jade: ""
// };
//
// transporter.sendMail(mailOptions, function(error, info){
//     if (error) {
//         console.log(error);
//     } else {
//         console.log('Email sent: ' + info.response);
//     }
// });

// app.post('/sendMail', mailOptions.sendMail);