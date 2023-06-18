const express = require('express');
const post_route = express();

const bodyParser = require('body-parser')
post_route.use(bodyParser.json())
post_route.use(bodyParser.urlencoded({ extended: false }))

// multer setup
const multer = require('multer');
const path = require('path');

post_route.use(express.static('public'));

const stroage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, '../public/postimage'), function (error, success) {
            if (error) {
                console.log(error)
            }
        })
    },
    filename: function (req, file, cb) {
        const name = Date.now() + '-' + file.originalname;
        cb(null, name, function (error, success) {
            if (error) {
                console.log(error)
            }
        })
    }
});

const uplod = multer({ storage: stroage });

const postcoltrollers = require('../controllers/postControllers')

post_route.post('/create-post', uplod.single('image'), postcoltrollers.postcontrollers);


post_route.post('/loginuser-data', postcoltrollers.loginuserdata);

post_route.get('/get-post/:token', postcoltrollers.getControler);

// 
post_route.get('/all-teacher', postcoltrollers.allteacher);

post_route.get('/all-teacher-cors', postcoltrollers.allitemslist);
// all sucess
post_route.get('/sucess-student-pement', postcoltrollers.pementstudent);

// student dasbord
post_route.get('/student-dasbord/:email', postcoltrollers.studentdasbord);


// pement sucess url
post_route.post('/success/:id', postcoltrollers.pementSucess);
post_route.post('/fail', postcoltrollers.fail);
post_route.post('/cancel', postcoltrollers.cancel);

// single user
post_route.get('/single-teacher', postcoltrollers.singleteacher);
post_route.get('/single-student', postcoltrollers.singlestudent);
post_route.get('/single-admin', postcoltrollers.singleadmin);

// pement getway
post_route.get('/init/:user', postcoltrollers.pementGetWay);

// all student
post_route.post('/all-student', postcoltrollers.studentData);

// admin
post_route.get('/admin1', postcoltrollers.admin1);
post_route.get('/admin2', postcoltrollers.admin2);
post_route.get('/admin3', postcoltrollers.admin3);
post_route.get('/admin4', postcoltrollers.admin4);

// all pement data
post_route.post('/student-pement-cose', postcoltrollers.pementsucess);


post_route.get('/delet-post/:id', postcoltrollers.deletPost);


post_route.get('/student-das/:id', postcoltrollers.studentdas);
// pement sucess
post_route.get('/student-pement/:email', postcoltrollers.studentpement);

post_route.post('/upded-post', uplod.single('image'), postcoltrollers.updedpost);



module.exports = post_route;