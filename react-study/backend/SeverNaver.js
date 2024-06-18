// 네이버 검색 API 예제 - 블로그 검색
var express = require('express');
var app = express();
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
    app.listen(3000, function () {
    console.log('http://127.0.0.1:3000/api/books?query=React app listening on port 3000!');
    });