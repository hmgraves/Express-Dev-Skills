var express = require('express');
const { append } = require('express/lib/response');
var router = express.Router();

const skillsCtrl = require('../controllers/skills');

// All routes in skillsRouter will start with "/skills"
router.get('/', skillsCtrl.index);
router.get('/:id', skillsCtrl.show);

module.exports = router;