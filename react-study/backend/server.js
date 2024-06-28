// npm i --s mysql
const express = require('express');
const bodyParser = require('body-parser')
const mysql = require('mysql')
const cors = require('cors')
const path = require('path') // path 모듈 추가
const static = require('serve-static') // serve-static 모듈 추가

const app = express()

// 서버 포트 설정
const PORT = process.env.PORT || 5003;

// 미들웨어 설정
app.use(cors());
app.use(bodyParser.json());
app.use('/', static(path.join(__dirname, 'public')));
// http://localhost:5003/ 요청이 오면 was서버의 public 폴더를 찾아서 그 안에 있는 index.html을 서비스 하도록 설정


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

app.post('/api/login', (req, res) => {
    const {userid, passmd} = req.body;
    // console.log(userid, passmd)
    const sql = "SELECT no, name, userid from MEMBER WHERE userid= ? and passmd= ?;"
    pool.getConnection((err, con) => {
        if(err) return res.status(500).json({result:'error', message:'Internal Server Error'})
        con.query(sql, [userid, passmd], (err, result) => {
            con.release();
            if(err) return res.status(500).json({result:'error', message:'Database SQL Error'})
            // console.log('result: ', result)
        if(result.length>0) {
            const user = result[0]
            res.json({result: 'success',msg:`${user.name}님 환영합니다`, data:{no:user.no, name:user.name, userid:user.userid}})
        }else{
            res.json({result:'fail', msg:'다시 로그인 해주세요'})
        }
        })
    })
})
// board ----------------------------------------
app.post('/api/boards',(req, res) => {
    const {title, userid, content} = req.body; // post 방식의 body데이터 받기
    if(!title||!userid||!content) {
        return res.status(400).send('제목, 작성자, 글내용을 입력해야 해요')
    }
    const sql='insert into board set ?'
    const boardData = {title,userid,content};
    pool.getConnection((err, con) => {
        if(err) return res.status(500).send(err)
        con.query(sql, boardData, (err, result) => {
            con.release()
            if(err) return res
            .status(500)
            .send(err)
            // console.log('board write result: ', result)
            if(result.affectedRows>0) {
                res
                .json({result:'success', data:{no:result.insertId}})
            }else{
                res
                .json({result:'fail'})
            }
            // res.json({result:'success'})
        })
    })
})
// 글쓰기 끝 ------------------------------
app.get('/api/boardTotal', (req, res) => {
    const sql = `SELECT count(id) totalCount from board`
    pool.getConnection((err,con) => {
        if (err) return res.status(500).send(err)
        con.query(sql,(err,result) => {
        con.release()
        if (err) return res.status(500).send(err)
        // console.log(result)
        //[{totalCount:result[0]}]
        res.json({totalCount:result[0].totalCount})
    })
})})

// 글 보기 || 글 수정
app.get('/api/boards', (req, res) => {
    // offset 피라미터값 받기
    let offset = req.query.offset
    if(!offset) {
        offset=0;
    }

    // console.log('get /api/members')
    const sql = `SELECT id, title, userid, content, readnum, date_format(wdate, '%Y-%m-%d') wdate, (select count(rid) from reply where board_id=B.id) replyCnt from board B order by id desc limit 5 offset ${offset}`
    pool.getConnection((err, con) => {
        if(err) return res.status(500).json(err) // db 연결오류
        con.query(sql, (err, result) => {
            con.release();
            if(err) return res.status(500).json(err) // sql문 오류
            res.json(result)
    })
    })
})
//글 보기 관련
app.put('/api/boardReadNum/:id', (req,res) => {
    const id=req.params.id
    // 조회수 증가
    const sql = `UPDATE board SET readnum = readnum+1 where id=?`
    pool.getConnection((err,con) => {
        if(err) return res.status(500).send(err)
        con.query(sql, [id],(err, result) => {
            con.release()
            if(err) return res.status(500).send(err)
            // console.log(result)
            if(result.affectedRows>0) {
                res.json({result:'success'})
            }else{
                return res.status(404).send('Board not found')
            }
    })
    })
})
// 조회수 증가
app.put('/api/boardReadNum/:id', (req,res)=>{
    const id=req.params.id;
    const sql = `UPDATE board SET readnum=readnum+1 where id=?`
    db.run(sql,[id],(err) => {
        if(err) return res.status(500).send(err)
        res.json({result:'success'})
    })
})
// 글 보기
app.get('/api/boards/:id', (req, res) => {
    const id=req.params.id;
    // console.log('id: ',id)

    // console.log('get /api/members')
    const sql = "SELECT id, title, userid, content, readnum, date_format(wdate, '%Y-%m-%d')wdate from board where id=?"
    pool.getConnection((err, con) => {
        if(err) return res.status(500).send('Internal Server Error') // db 연결오류
        con.query(sql, [id], (err, result) => {
            con.release();
            if(err) return res.status(500).json(err) // sql문 오류
            res.json(result)
    })
    })
})

// 글 삭제
app.delete('/api/boards/:id', (req,res) => {
    const id = req.params.id
    const sql = `delete from board where id=?`
    pool.getConnection((err,con) => {
        if(err) return res.status(500).send(err)// db연결 오류
        con.query(sql, [id], (err,result) => {
            if(err) return res.status(500).send('Error') // db연결 오류
            if(result.affectedRows>0) {
                res.json({result:'success'})
            }else{
                res.json({result:'fail'})
            }
    })
    })
})
// 글 수정 처리
app.put('/api/boards/:id', (req, res) => {
    // 글번호
    const id = req.params.id;
    // 수정한 글내용
    // console.log(">>>id",id)
    const {title,userid,content} = req.body;
    // console.log(title, userid, content)

    const sql = 'update board set title=?, userid=?, content=? where id=?'
    pool.getConnection((err, con) => {
        if(err) return res.status(500).send(err);
        con.query(sql, [title, userid, content, id], (err, result)=>{
            con.release()
            if(err) return res.status(500).send(err);
            if(result.affectedRows>0){
                res.json({result:'success'})
            }else{
                res.json({result:'fail', msg:'게시글을 찾을 수 없어요'})
            }
        })
    })

})
// 댓글 추가
app.post(`/api/boards/:id/reply`, (req, res) => {
    const board_id = req.params.id;
    const {userid, content} = req.body;
    const sql = `insert into reply(userid, content, board_id) values(?,?,?)`

    pool.getConnection((err, con) => {
        if(err) return res.status(500).send(err)
        con.query(sql, [userid, content, board_id], (err, result) => {
            con.release();
            if(err) return res.status(500).send(err)
            if(result.affectedRows>0) {
                res.json({result:'success'})
            }else{
                res.json({result:'fail'})
            }
    })
    })
})
// 게시글에 대한 댓글 목록 가져오기
app.get(`/api/boards/:id/reply`, (req, res) => {
    const board_id = req.params.id;
    const sql = `select * from reply where board_id=?`
    pool.getConnection((err, con) => {
        if(err) return res.status(500).send(err)
        con.query(sql, [board_id],(err,result) => {
            con.release();
            if(err) return res.status(500).send(err)
            res.json(result)
    })
    })
})

app.delete(`/api/boards/reply/:rid`, (req, res) => {
    const rid = req.params.rid;
    console.log('rid: ', rid)
    const sql = `delete from reply where rid=?`;
    pool.getConnection((err,con) => {
        if(err) return res.status(500).send(err)
        con.query(sql,[rid], (err, result)=>{
            con.release();
            if(err) return res.status(500).send(err)
            if(result.affectedRows>0){
                res.json({result:'success'})
            }else{
                res.json({result:'fail'})
            }
        })
    })
})
app.put(`/api/boards/reply/:rid`, (req, res) => {
    const {rid} = req.params;
    const {userid, content} = req.body;
    const sql = `update reply set userid=?, content=?, wdate=now() where rid=?`

    pool.getConnection((err,con) => {
        if(err) return res.status(500).send(err)
        con.query(sql, [userid,content,rid], (err, result) => {
            con.release()
            if(err) return res.status(500).send(err)
            if(result.affactedRows>0) {
                res.json({result:'success'})
            }else{
                res.json({result:'fail'})
            }
    })
    })

})



// ----------------------------------------------
var client_id = 'ZFvmhoKbkCYXnwgVCgoM';
var client_secret = 'INqVoJVl3y';
// react에서 /api/books?query=react&start=1&display=12
app.get('/api/books', function (req, res) {
    let start = req.query.start;
    let display = req.query.display;

    var api_url = `https://openapi.naver.com/v1/search/book.json?query=${encodeURI(req.query.query)}&start=${start}&display=${display}`; // JSON 결과
    console.log(api_url);
//   var api_url = 'https://openapi.naver.com/v1/search/blog.xml?query=' + encodeURI(req.query.query); // XML 결과
    var request = require('request');
    var options = {
        url: api_url,
        headers: {'X-Naver-Client-Id':client_id, 'X-Naver-Client-Secret': client_secret}
        };
    request.get(options, function (error, response, body) {
        if (!error && response.statusCode == 200) {
        res.writeHead(200, {'Content-Type': 'text/json;charset=utf-8'});
        res.end(body);
        } else {
        res.status(response.statusCode).end();
        console.log('error = ' + response.statusCode);
        }
    });
});

// express 서버 시작
app.listen(PORT, () => {
    console.log('server.js 서버 시작됨...')
    console.log(`http://localhost:${PORT}`)
})