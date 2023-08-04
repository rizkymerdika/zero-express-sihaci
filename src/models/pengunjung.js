const connection = require('../config/database');

const getPengunjung = (body) => {
    if(body.date == 0 && body.ip == 0){
        let bulan2 = body.bulan + 1;
        const query = `
                        SELECT * FROM pengunjung_website WHERE date >= '${body.tahun}-${body.bulan}-01' AND date <= '${body.tahun}-${body.bulan}-31'
                    `;
        return connection.queryPromise(query);
    } else {
        const query = `
                        SELECT * FROM pengunjung_website WHERE date = '${body.date}' AND ip = '${body.ip}'
                    `;
        
        return connection.queryPromise(query);
    }
};
const storePengunjung = (body) => {
    const query = `
        INSERT INTO pengunjung_website (id, date, ip)
        VALUES (NULL, '${body.date}', '${body.ip}')
    `;
    return connection.queryPromise(query)
}

module.exports = {
	getPengunjung, storePengunjung
};