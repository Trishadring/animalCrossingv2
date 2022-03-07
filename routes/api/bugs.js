const express = require('express');
const router = express.Router();
const bugsCtrl = require('../../controllers/bugs');


// /*---------- Public Routes ----------*/

router.get('/', bugsCtrl.index)




module.exports = router;