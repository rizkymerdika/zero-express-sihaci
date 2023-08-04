const express = require('express');

const router = express.Router();

const searchController = require('../controllers/searchs');

router.get('/get', searchController.getSearchData);

module.exports = router;