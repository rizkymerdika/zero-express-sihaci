const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();
const bcrypt = require('bcrypt');

const connection = require('../config/database');
const pengunjungModels = require('../models/pengunjung')
router.use(bodyParser.json());

const getPengunjung = (req, res) => {
    const bulan = req.query.bulan || 0;
	const tahun = req.query.tahun || 0;
    const date = req.query.date || 0;
	const ip = req.query.ip || 0;
    
	const data = {bulan, tahun, date, ip}
	pengunjungModels.getPengunjung(data)
    .then(modelsData => {
		res.status(200).json({
			status: 200,
			message: "Get all data pengunjung success",
			data: modelsData
		});
    })
    .catch(error => {
		console.error('Error executing MySQL query:', error);
		res.status(500).json({
			status: 500,
			message: 'Internal server error',
			error: error
		});
    });
}
const storePengunjung = (req, res) => {
    const data = {
        date: req.body.date,
        ip: req.body.ip
    };

    pengunjungModels.storePengunjung(data)
    .then(modelsData => {
        res.status(200).json({
            status: 200,
            message: "Send data Pengunjung success",
            data: data
        });
    })
    .catch(error => {
        console.error('Error executing MySQL query:', error);
        res.status(500).json({
            status: 500,
            message: 'Internal server error',
            error: error
        });
    });
}

module.exports = { getPengunjung, storePengunjung }