var express = require('express');
var router = express.Router();
var ctrllocation = require('../controllers/location');
var ctrlothers = require('../controllers/other');

router.get('/',ctrllocation.homepage);
router.get('/location',ctrllocation.location);
router.get('/location/review',ctrllocation.reviewpage);
router.get('/location/about',ctrlother.about);

module.exports = router;