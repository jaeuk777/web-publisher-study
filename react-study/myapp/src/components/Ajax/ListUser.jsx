import React,{useState, useEffect} from 'react'
import { useSearchParams } from 'react-router-dom'
import { Pagination, Spinner } from 'react-bootstrap'

// ajax2?page=1&per_page=3
// https://reqres.in/api/users?page=1&per_page=3

export default function ListUser() {
    const [userList, setUserList] = useState([]);
    const [total, setTotal] = useState(0); // 총 회원수 (12) / 3 = 4pages
    const [totalPages, setTotalPages] = useState(1); // 페이지수 = Math.ceil(total/per.page)
    const [currentPage, setCurrentPage] = useState(1);
    const [loading, setLoading] = useState(false);
    
    const [params] = useSearchParams()
    const perPage=Number(params.get('per_page'))
    // query string 으로 전달된 파라미터값 (page, per_page) 받기
    // console.log(`page=${params.get('page')}&per_page=${params.get('per_page')}`)

    const getAllUsers=async (page, perPage)=> {
        // alert(page+"/"+perPage)
        // console.log(url)
        // fetch()이용해서 https://reqres.in/api/users?page=1&per_page=3 로
        // 요청 보내고 데이터 받아오기
        setLoading(true);

        let url = `https://reqres.in/api/users?page=${page}&per_page=${perPage}&delay=2`

        fetch(url)
        .then(respons=>respons.json())
        .then(resData=>{
            if(!resData || !resData.data){
                alert('데이터가 없습니다')
                return;
            }
            // alert(JSON.stringify(resData))
            setLoading(false);
            let tmpArr = [... resData.data]
            let tmpTotal = resData.total;
            setUserList(tmpArr);
            setTotal(tmpTotal);
            setTotalPages(resData.total_pages); // 총 페이지 수 (4)

        })
        .catch(error => alert(error.message))

        // const res = await fetch("https://reqres.in/api/users?page=1&per_page=3")
        // const json = await res.json()
        // setUserList(json.data);
    }
    // useEffect() 에서 getAllUsers() 호출하기 ==> setUserList()로 user목록 설정
    useEffect(()=>{
        getAllUsers(1, perPage)
    }, [])

    const onPageChange=(page)=>{
        // alert(page)
        setCurrentPage(page); // 현재 보여줄 페이지로 설정
        // currentPage에 해당하는 데이터 받아오기
        getAllUsers(page, perPage)
    }
    // userList의 map()이용해서 출력

    // [... Array(total)]
    // 배역의 길이가 4인 배열이 생성된다

    // [undefined, undefined, undefined, undefined]

    // Array(4).keys()==> 배열의 index번만

    return (
        <div className='container py-4'>
            <h2>All Users - {total}명</h2>
            <br />
            {loading&&
            <Spinner animation='border' role='status'>
                <span className='visually-hidden'>Loding...</span>
            </Spinner>
            }
            {
            userList.map((user,i)=>(
            <ul>
                <li key={user.id}>
                    <img src={user.avatar}/><br />
                    {user.first_name}  {user.last_name} <br />
                    {user.email}
                </li>
            </ul>
            ))
            }
            <div>
                <Pagination className='justify-content-center'>
                    {/* totalPages길이의 배열을 생성해서 인덱스를 추출 */}
                    {[... Array(totalPages).keys()].map((page)=>( //keys()는 index번호를 반환한다
                    <Pagination.Item key={page+1} active={(page+1)===currentPage} onClick={()=>{
                        onPageChange(page+1)
                    }}>{page+1}</Pagination.Item>
                    ))
                    }
                </Pagination>
            </div>
        </div>
    )
}
