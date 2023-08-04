const connection = require('../config/database');

const getAllAkomodasis = (body) => {
	if(body.limit == 0 && body.category == 0){
		const query = `SELECT * FROM akomodasis`;
		return connection.queryPromise(query);
	} else if(body.limit != 0 && body.category == 0) {
		const query = `SELECT * FROM akomodasis LIMIT ${body.limit} OFFSET ${body.offset}`;
		return connection.queryPromise(query);
	} else if(body.limit == 0 && body.category != 0) {
		const query = `SELECT * FROM akomodasis WHERE akomodasis.kategori_hotel = '${body.category}'`;
		return connection.queryPromise(query);
	} else {
		const query = `SELECT * FROM akomodasis WHERE akomodasis.kategori_hotel = '${body.category}' LIMIT ${body.limit} OFFSET ${body.offset}`;
		return connection.queryPromise(query);
	}
};

const storeAkomodasis = (body) => {
	const query = `
					INSERT INTO akomodasis
  						(id_akomodasi, nama_akomodasi, kategori_hotel, harga_terendah, harga_tertinggi, nomor_telepon, alamat_akomodasi, banner_akomodasi, image_akomodasi, deskripsi_akomodasi, link_gmaps, link_website, link_instagram, link_youtube, link_twitter, link_facebook)
					VALUES 
						(NULL,  '${body.nama_akomodasi}', '${body.kategori_hotel}', '${body.harga_terendah}', '${body.harga_tertinggi}', '${body.nomor_telepon}', '${body.alamat_akomodasi}', '${body.banner_akomodasi}', '${body.image_akomodasi}', '${body.deskripsi_akomodasi}', '${body.link_gmaps}', '${body.link_website}', '${body.link_instagram}', '${body.link_youtube}', '${body.link_twitter}', '${body.link_facebook}');
				`;
	return connection.queryPromise(query);
};

const getakomodasisById = (id) => {
	const query = `SELECT * FROM akomodasis WHERE id_akomodasi = ${id}`;
	return connection.queryPromise(query);
};

const updateAkomodasis = (body) => {
	const query = `
					UPDATE 
						akomodasis 
					SET 
						nama_akomodasi = '${body.nama_akomodasi}',
						kategori_hotel = '${body.kategori_hotel}',
						harga_terendah = '${body.harga_terendah}',
						harga_tertinggi = '${body.harga_tertinggi}',
						nomor_telepon = '${body.nomor_telepon}',
						alamat_akomodasi = '${body.alamat_akomodasi}',
						banner_akomodasi = '${body.banner_akomodasi}',
						image_akomodasi = '${body.image_akomodasi}',
						deskripsi_akomodasi = '${body.deskripsi_akomodasi}',
						link_gmaps = '${body.link_gmaps}',
						link_website = '${body.link_website}',
						link_instagram = '${body.link_instagram}',
						link_youtube = '${body.link_youtube}',
						link_twitter = '${body.link_twitter}',
						link_facebook = '${body.link_facebook}'
					WHERE 
						id_akomodasi = '${body.id_akomodasi}'
				`;
	return connection.queryPromise(query);
};

const deleteakomodasis = (id) => {
	const query = `DELETE FROM akomodasis WHERE id_akomodasi = ${id}`;
	return connection.queryPromise(query);
};

module.exports = {
	getAllAkomodasis,
	storeAkomodasis,
	getakomodasisById,
	updateAkomodasis,
	deleteakomodasis
};