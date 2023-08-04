const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();
const bcrypt = require('bcrypt');

const connection = require('../config/database');
const searchModel = require('../models/searchs')
router.use(bodyParser.json());

const getSearchData = (req, res) => {
	const search = req.query.search || '';
	console.log(req.query)
	searchModel.getSearchData(search)
    .then(modelsData => {
		res.status(200).json({
			status: 200,
			message: "Berhasil mendapatkan data",
			data: modelsData
		});
    })
    .catch(error => {
		console.error('Error dalam menjalankan kueri MySQL:', error);
		res.status(500).json({
			status: 500,
			message: 'Kesalahan server internal',
			error: error
		});
    });
};

module.exports = {
	getSearchData
}
