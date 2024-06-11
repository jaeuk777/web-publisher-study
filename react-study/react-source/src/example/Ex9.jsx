import {useState} from 'react';
export default function Comment({addPost}){
    // const [userName, setName]=useState('')
    // const [userComment, setComment]=useState('')
    // // const [date, setDate]=useState(Date());

    // const pushInfo=(na, co)=>{
    //     setName(na.target.value);
    //     setComment(co.target.value);
    // }
    // return (
    //     <div style={{ margin:'5px'}}>
    //         {/* <img style={{width:'100px',height:'100px'}} src="imgsrc/peopleicon.jpeg" alt="" /> */}
    //         {/* <div style={{marginRight:'1em'}}>
    //             <span className="text-secondary"><h4>{name}</h4></span>
    //             <span>[24.06.11]</span>
    //             <div style={{clear:'both'}}></div>
    //             <p style={{fontSize:'1.2rem'}}>{title}</p>
    //         </div> */}
    //         <div>
    //             <p>{userName}</p>
    //             <p>{userComment}</p>
    //         </div>
    //         <hr />
    //         유져이름: <input type="text" name='userName' placeholder="Name" className="form-control" />
    //         댓글: <input type="text" name='userComment' placeholder="Comment" className="form-control" />
    //         <button onClick={pushInfo} className="btn btn-primary">댓글 저장</button>
    //     </div>
    // )
    const [name, setName] = useState('');
    const [comment, setComment] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        addPost({ name, comment });
        setName('');
        setComment('');
    };

    return (
        <form onSubmit={handleSubmit}>
        <div>
            <label>이름: </label>
            <input
            className="form-control"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            />
        </div>
        <div>
            <label>댓글: </label>
            <input
            className="form-control"
            type="text"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            />
        </div>
        <button className="btn btn-primary" type="submit">게시</button>
        </form>
    )
}