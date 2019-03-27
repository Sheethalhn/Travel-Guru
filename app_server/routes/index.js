var express = require('express');
var app = express();
var router = express.Router();
var cntrMain = require('../controllers/main');
/* GET home page. */
router.get('/', cntrMain.home)
router.get('/register', cntrMain.register)
router.get('/login', cntrMain.login)
router.post('/register', cntrMain.postRegister)
router.post('/login', cntrMain.postLogin)
router.post('/search', cntrMain.search)
router.get('/about', cntrMain.about)
router.get('/survey', cntrMain.survey)

router.get('/admin', cntrMain.admin)
router.post('/admin', cntrMain.addDestination)

module.exports = router;
