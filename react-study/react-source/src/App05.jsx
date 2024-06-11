import YourComp from './example/Ex4'
const App=()=> {
    const user={
        name:'박재욱',
        email: 'mertake7@naver.com',
        age:22
    }
        //user : 일반 데이터
    return (
        <div>
            <h1>App05</h1>
            <hr />
            <YourComp name='홍길동' email='mertake7@naver.com' age='24'></YourComp>
            <YourComp name={user.name} email={user.email} age={user.age} />
            <YourComp { ... user}/>
            <YourComp/>
        </div>
    )
}
export default App;