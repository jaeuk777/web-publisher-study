import MyProfile from "./example/Myprofile"
const App=()=> {
    return (
        <>
        <h1>App04</h1>
        <hr />
        {/* 여기에 MyProfile 삽입. props로 name, userId, Email, tel 값을 전달 */}
        <MyProfile username='박재욱' userId='mertake7' userEmail='mertake7@naver.com' usertel='010-6219-6372'></MyProfile>
        </>
    )
}
export default App