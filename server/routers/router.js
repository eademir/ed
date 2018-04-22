var express = require('express');
var router = express.Router();
var controller = require('../controllers/controller')

router.get('/', controller.index);
router.get('/blog', controller.blog);
router.get('/contact', controller.contact);
router.get('/about-me', controller.aboutme);

module.exports = router;