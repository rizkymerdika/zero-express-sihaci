const mysql = require('mysql');
const util = require('util');

const connection = mysql.createConnection({
	host: process.env.DB_HOST,
	user: process.env.DB_USER,
	password: process.env.DB_PASS,
	database: process.env.DB_NAME
});

const queryPromise = util.promisify(connection.query).bind(connection);

connection.connect((err) => {
  	if (err) {
    	console.error('Error connecting to MySQL:', err);
  	};
});

module.exports = { queryPromise };
