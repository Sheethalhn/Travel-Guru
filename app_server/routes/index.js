var express = require('express');
var app = express();
var router = express.Router();
var cntrMain = require('../controllers/main');
var modelMain = require("../models/modelMain");

/* GET home page. */
router.get('/', cntrMain.home)
router.get('/register', cntrMain.register)
router.get('/login', cntrMain.login)
router.post('/register', cntrMain.postRegister)
router.post('/login', cntrMain.postLogin)
router.post('/search', cntrMain.search)
router.get('/about', cntrMain.about)
router.get('/survey', cntrMain.survey)
router.get('/data', cntrMain.options)
router.get('/admin', cntrMain.admin)
router.post('/admin', modelMain.post_adddest)
router.post('/data', modelMain.post_loaddataset)
router.get('/userlist', modelMain.get_destinations)

router.get('/update', cntrMain.update)
router.post('/update', modelMain.searchCity)


router.get('/userlist/:username', modelMain.get_showdest)
router.post('/deleteuser/:username', modelMain.post_deletedest)



module.exports = router;
