var express = require('express');
var router = express.Router();
var controller = require('../controllers/controller')

router.get('/', controller.index);
router.get('/blog', controller.blog);
router.get('/contact', controller.contact);
router.get('/about-me', controller.aboutme);
router.get('/404', controller.err);
//post
router.post('/contact', controller.sentEmail);

module.exports = router;