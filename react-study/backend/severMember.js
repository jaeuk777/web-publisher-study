// npm i --s mysql
const express = require('express');
const bodyParser = require('body-parser')
const mysql = require('mysql')
const cors = require('cors')

const app = express()

// 서버 포트 설정
const PORT = process.env.PORT || 3000;

// 미들웨어 설정
app.use(cors())
app.use(bodyParser.json())

// db접속
const pool = mysql.createPool({
    connectionLimit : 10,
    host : 'localhost',
    user : 'root',
    password : 'Wodnr12#',
    port : '3306',
    database : 'testDB'
})
// req : 요청과 관련된 객체
// res : 응답과 관련된 객체 ==> 브라우저와 연결되어 있다.
app.get(`/api/hello`,(req, res) => {
    res.writeHead(200,{'Content-Type':'text/html; charset=UTF-8'})
    res.write('<h1>Hello NodeJs</h1>')
    res.write('<h2>리액트와 연동할 백엔드 서버입니다</h2>')
    res.end()
})
app.get('/api/json',(req, res)=>{
    const data={
        title: 'Hi NodeJS',
        msg: 'JSON유형의 데이터를 응답으로 보냅니다.'
    }
    res.json(data)
})
// Restfull 방식
// 요청 메서드에 따라 비즈니스 로직을 달리 구성
// GET /api/members : 모든 회원정보 조회
// GET /api/members/1 : 1번 회원정보 조회`
// POST /api/members : 특정 회원정보 등록
// DELETE /api/members/1 : 1번 회원정보 삭제
// PUT /api/members/1 : 1번 회원정보 수정
app.post('/api/members', (req, res) => {
    // 사용자가 입력한 값을 받자. ==> req 통해서 받는다. post방식 : req.boy
    const {name,userid,passmd,email} = req.body;
    console.log(name, userid, passmd, email)

    const sql = 'INSERT INTO member SET ?';
    const userData = {name, userid, passmd, email};

    pool.getConnection((err, con) => {
        if(err) return res.status(500).json(err) // 에러 발생시 500상태코드와 함께 에러 출력
        con.query(sql, userData, (err, result) => {
            //   sql문을 실행시키고 그결과를 콜백 함수에 전달
            con.release(); // db연결 자원 반납
            if(err) return res.status(500).json(err)
            res.json({result:`success`, msg: `${name}님 정보 DB삽입 성공`})
        })
    })
})

app.get('/api/members', (req, res) =>{
    console.log('get /api/members')
    const sql = "SELECT no, NAME, USERID, PASSMD, EMAIL, date_format(reg_date, '%Y-%m-%d')REG_DATE FROM member ORDER BY no ASC";

    
    pool.getConnection((err,con) => {
        if(err) return res.status(500).json(err)
        con.query(sql, (err, result) => {
            con.release();
            if(err) return res.status(500).json(err)
            res.json(result)
        })
    })
})
// ?query=react&display=12 ===> 쿼리 스트링. req.query.display, req.query.query
// post 방식의 body데이터 ==> req.body.name, req.body.userid
// path방식의 데이터 /api/members/10 ==> req.params.no
app.delete('/api/members/:no', (req, res) => {
    const no = req.params.no;
    console.log('삭제할 회원번호 ',no)
    if(!no) {
        res.json({result: 'fail', msg: '삭제할 회원번호가 존재하지 않아요'})
        return;
    }
    const sql = 'DELETE FROM member WHERE no=?'
    pool.getConnection((err, con) => {
        if(err) return res.status(500).json(err)
        con.query(sql,[no], (err,result)=>{
            console.log('result: ',result)
            if(result.affectedRows>0) {
                res.json({result:'success', msg:`${no}번 회원정보를 삭제했어요`})
            }else{
                res.json({result:'fail',msg:`${no}번 회원정보 삭제 실패했어요`})
            }
        })
    })


})

// express 서버 시작
app.listen(PORT, () => {
    console.log('serverMember 서버 시작됨...')
    console.log(`http://localhost:${PORT}`)
})