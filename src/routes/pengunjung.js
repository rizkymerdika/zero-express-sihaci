const express = require('express');

const router = express.Router();

const pengunjungControllers = require('../controllers/pengunjung');

router.get('/get', pengunjungControllers.getPengunjung);
router.post('/store', pengunjungControllers.storePengunjung);

module.exports = router;