const express = require('express');
const router = express.Router();
const fishCtrl = require('../../controllers/fish');


// /*---------- Public Routes ----------*/

router.get('/', fishCtrl.index)




module.exports = router;