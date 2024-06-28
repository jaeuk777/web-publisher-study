import React,{ChangeEvent, FormEvent} from 'react'
import {useFormik} from 'formik'
import * as Yup from 'yup' // 유효성 체크 시 사용
import axios from '../Lib/AxiosCreate'
import { AxiosResponse } from 'axios'
export interface ResponseData {
    result:string
    data?:string
}
export interface PostFormValues{
    userid:string
    title:string
    content:string
    attach?:File
}
// 파일업로드 할떄 form의 method는 post방식
// post방식일 떄 form의 enctype 속성값을  enctype을 "multipart/form-data"로 지정해야 한다
// axios를 이용할 때는 headers 속성값으로 "Content-type":"multipart/form-data"
// 로 지정한다
// FormData 객체를 이용해서 사용자가 입력한 값들을 전송해야 한다

// useFomik훅을 사용해보자. ==> 폼 상태와 이벤트를 관리하는 훅. onChange와 관련된
// 핸들러함수를 자동으로 생성하고 제공한다. ==> handleChange함수 제공
// formik.values 속성을 통해 사용자가 입력한 값을 접근할 수 있다.
// 설치해서 사용
// npm i --s formik yup

export default function PostForm() {
    const formik = useFormik<PostFormValues>({
        initialValues:{userid:'',title:'',content:''},
        onSubmit: async values => {
            console.log('value: ', values)
            console.log('values.userid: ',values.userid)
            // FormData에 파라미터값들을 담아주자
            const formData = new FormData();
            formData.append('userid', values.userid)
            formData.append("title", values.title)
            formData.append("content", values.content)
            if(values.attach) {
                formData.append("attach", values.attach)
            }
            try{
                let url=`http://localhost:5004/api/postUpload`
                // alert(url);
                const response:AxiosResponse = 
                await axios.post(url, formData,{
                    headers:{
                        'Content-Type':'multipart/form-data'
                    }
                })
                const responseData:ResponseData= response.data;
                alert(JSON.stringify(responseData))
            }catch(error){
                alert('Error'+error)
            }

        }
    })

    const onChangeFile=(e:ChangeEvent<HTMLInputElement>)=>{
        if(e.currentTarget.files){//첨부파일이 있다면
            formik.setFieldValue('attach', e.currentTarget.files[0])
        }
    }

    return (
        <div className="container">
            <div className="col-8 offset-2">
            <h1 className="text-center my-4">POST</h1>
            <form onSubmit={formik.handleSubmit}>
                <table className="table">
                    <tr>
                        <td style={{width:'20%'}}>
                            <label>작성자</label>
                        </td>
                        <td>
                            <input type="text"    
                            onChange={formik.handleChange}           
                            onBlur={formik.handleBlur}
                            value={formik.values.userid}
                            name="userid" className="form-control"></input>
                        </td>
                    </tr>
                    <tr>
                        <td style={{width:'20%'}}>
                            <label>제목</label>
                        </td>
                        <td>
                            <input type="text"
                            onChange={formik.handleChange}           
                            onBlur={formik.handleBlur}
                            value={formik.values.title}                            
                            name="title" className="form-control"></input>

                        </td>
                    </tr>
                    <tr>
                        <td style={{width:'20%'}}>
                            <label>글내용</label>
                        </td>
                        <td>
                            <textarea 
                            onChange={formik.handleChange}           
                            onBlur={formik.handleBlur}
                            value={formik.values.content}     
                            className="form-control" name="content"/>
                        </td>
                    </tr>
                    <tr>
                        <td style={{width:'20%'}}>
                            <label>첨부파일</label>
                        </td>
                        <td>
                            <input type="file"
                            onChange={onChangeFile}
                            onBlur={formik.handleBlur}
                            
                            name="attach" className="form-control"></input>
                        </td>
                    </tr>
                    <tr>
                        <td colSpan={2}>
                            <button type="submit" className="btn btn-success">글쓰기</button>                       
                            <button type="reset" className="btn btn-danger">다시쓰기</button>                       
                        </td>
                    </tr>
                </table> 
            </form>
        </div>
    </div>
    )
}
