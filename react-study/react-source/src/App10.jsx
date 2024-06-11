import Comment from "./example/Ex9"
import { useState } from "react"
const App=()=>{
    // let arr=[
    //     {name:'홍길동',title:'네 열심히 해봅시다!!'},
    //     {name:'이영희',title:'React가 어렵지만... 재밌게 해볼게요'},
    //     {name:'최철수',title:'저도 마찬가지에요.'}
    // ]
    
    // const [replyList, setReplyList]= useState(arr);
    // // 배열.map((요소, 인덱스번호)=>{})
    // // map함수는 배열에 저장되어 있는 요소만큼 반복문 돌면서, 안의 컬백함수에 저장되어 있는
    // // 배열요소를 첫번째 인수로 전달하고, 인덱스 번호는 두번째 인수로 전달한다
    // // 이를 전달받아... 가공하여 새로운 배열을 반환할 수 있다.
    // return (
    //     <div className="container py-5">
    //         <h1 className="text-center text-success">Board View</h1>
    //         <p className="alert alert-danger">오늘도 즐거운 하루 되세요</p>
    //         <hr />
    //         <Comment/>
    //         {/* {
    //             replyList.map((reply, index)=>{
    //                 return (
    //                 <Comment key={index} {...reply}/>
    //                 )
    //         })
    //         } */}
    //     </div>
    // )
    //}
        const [posts, setPosts] = useState([]);

        const addPost = (post) => {
        setPosts([...posts, post]);
        };
    
        return (
        <div className="container py-5">
            <h1 className="text-center text-success">게시물 작성</h1>
            <div>
            {posts.map((post, index) => (
                <div key={index} style={{display:'flex'}}>
                <img style={{width:'100px',height:'100px'}} src="imgsrc/peopleicon.jpeg" alt="" />
                <div>
                <h3>{post.name}</h3>
                <p>{post.comment}</p>
                </div>
                </div>
            ))}
            </div>
            <Comment addPost={addPost} />
        </div>
        );
    }
export default App