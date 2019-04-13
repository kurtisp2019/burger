/**
 * 
 *      connection.js 
 *      purpose: connects to sql database
 * 
 */

var mysql = require("mysql");
var connection;
if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
}
else {
    connection = mysql.createConnection(
        {
            host: "localhost",
            user: "root",
            password: "root",
            database: "burgers_db",
            port: 8889
        }
    );
}

connection.connect(function (_err) {
    
    if (_err) {
        console.log(_err);
        return;
    }

    console.log("You have connected as id: " + connection.threadId);
});

module.exports = connection;