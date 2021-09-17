const mysql= require('mysql');
const dbconfig = require('./dbConfig');
var connection = mysql.createConnection({
    host     : dbconfig.HOST,
    user     : dbconfig.USER,
    password : dbconfig.PASSWORD,
    database : dbconfig.DB,
    port:3306
});
connection.connect(error => {
    if (error) throw error;
    console.log("Successfully connected to the database.");
});
module.exports = connection;