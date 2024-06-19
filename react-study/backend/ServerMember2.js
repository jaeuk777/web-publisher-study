// // npm i --s mysql
// const express = require('express')
// const bodyParser = require('body-parser')
// const mysql = require('mysql')
// const cors = require('cors')
// const path = require('path')

// const app = express()

// // 서버 포트 설정
// const PORT = process.env.PORT || 3000;

// app.use(cors())
// app.use(bodyParser.json())

// const dbpath=path.resolve(__dirname, 'testDB.db')
// console.log('sqlite database와 연결됨')

// let db=new sqlite3.Database(dbPath, (err) => {
//     if(err)
//         console.log("Error: ", err.message)
//     else
//         console.log("Sqlie database와 연결됨")
// })

// app.post('/api/members',(req,res) => {
//     const {name, userid, passmd, email} = req.body;
//     let sql = `INSERT INTO member(name, userid, passmd, email, reg_date)
//                 VALUES(?,?,?,? datetime('now')) `
//     let userData=[ name, userid, passmd, email]
//     db.run(sql, userData, (err) => {
//         if(err){
//             return res.status(500).json({'Error' : err.message})
//         }
//         res.json({result: 'success',msg:`${name}님 정보 sqlire3삽입 성공`})
//     })
// })



// app.listen(PORT, () => {
//     console.log('serverMenber 서버 시작됨...')
//     console.log(`http://localhost:${PORT}`)
// })