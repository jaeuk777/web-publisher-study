const express=require('express')
const cors = require('cors')
const multer =require('multer')//파일 업로드시 필요함
const app=express()
const PORT=5004
//npm i --s multer

//파일 저장 위치와 파일명 설정
const storage=multer.diskStorage({
    destination:function(req, file, callback){
        callback(null, 'uploads/')//backend/uploads에 업로드 될 예정
    },
    filename:function(req, file, callback){
        callback(null,Date.now()+"_"+file.originalname)//파일명 설정
        //파일명: 업로드한날짜시간정보_파일명.확장자
    }
})
app.use(cors())
//파일업로드 설정
const upload = multer({storage:storage})

app.post('/api/postUpload', upload.single('attach'), (req,res)=>{
    console.log('hkhkhkhk')
    let originFilename='';
    if(!req.file){
        console.log('파일이 첨부되지 않았어요')
    }else{
        //첨부파일이 있다면
        originFilename=req.file.originalname;
        console.log('첨부파일명: ', originFilename)
        
    }
    const {userid,title,content}=req.body;
    console.log(userid, title, content)

    res.json({result:'success'})
} )

app.listen(PORT, ()=>{
    console.log(`serverFileUp.js 서버 시작됨...`)
    console.log(`http://localhost:${PORT}`)
})