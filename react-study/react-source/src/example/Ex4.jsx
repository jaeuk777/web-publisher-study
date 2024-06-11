const YourComp=({name, email, age})=> {
    // const {name, email, age} = props;
    // name='김길동'

    return (
        <div style={{backgroundColor:'skyblue', padding:'1em', margin:'5px'}}>
            <h3>Name: {name}</h3>
            <h3>Email: {email}</h3>
            <h3>Age: {age}</h3>

        </div>
    )
}
YourComp.defaultProps ={
    name:'아무개',
    email:'noname@email.com',
    age:20
}
export default YourComp;