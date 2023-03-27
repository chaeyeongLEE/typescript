import mysql from 'mysql';
const db = mysql.createPool({
    host : 'localhost',
    user : 'root',
    password : '1234',
    database : 'USERS'
});
 
module.exports = db;
export default db;