const express = require('express');
const router = express.Router();
const caughtCtrl = require('../../controllers/caught')


// /api/posts/someId/likes
router.post('/fish/:id/caught', caughtCtrl.create)
// /api/likes/:id
// router.delete('/caught/:id', caughtCtrl.deleteCaught)

module.exports = router;