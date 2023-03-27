const express = require('express');
const router = express();
import db from '../config/db';
 
// http://localhost:4000/ 으로 접속 시 응답메시지 출력
router.get('/login', (req: any,res: { send: (arg0: { products: any; }) => void; }) => {
    db.query('SELECT * FROM table1', (err: { products: any; }, data: any) => {
        if(!err) res.send({ products : data});
        else res.send(err);
    })
})
 
module.exports = router;