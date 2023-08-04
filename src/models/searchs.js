const connection = require('../config/database');

const getSearchData = async (search) => {
	try {
		console.log(search);
		const query = `SELECT * FROM travels WHERE nama_travel LIKE ?`;
		const query2 = `SELECT * FROM objek_wisatas WHERE nama_wisata LIKE ?`;
		const query3 = `SELECT * FROM events WHERE nama_event LIKE ?`;
		const query4 = `SELECT * FROM akomodasis WHERE nama_akomodasi LIKE ?`;
        const query5 = `SELECT * FROM kuliners WHERE nama_kuliner LIKE ?`;
		const searchParam = `%${search}%`;

		const data = {
			travel: await connection.queryPromise(query, [searchParam]),
			wisata: await connection.queryPromise(query2, [searchParam]),
			event: await connection.queryPromise(query3, [searchParam]),
			akomodasi: await connection.queryPromise(query4, [searchParam]),
            kuliner: await connection.queryPromise(query5, [searchParam])
		};

		return data;
	} catch (error) {
		throw new Error('Kesalahan dalam menjalankan kueri MySQL: ' + error.message);
	}
};

module.exports = {
	getSearchData
};
