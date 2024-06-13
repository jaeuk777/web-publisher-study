import React,{useState, createContext} from 'react'

const UserConText = createContext('unknown')
// UserContext 안에 {providerm Consumer}

export default function AppCtx() {
    const [userId, setUserId] = useState('손나영')
    return (
        <div>
            {/* 데이터 공급자 value에 지정된 데이터를 전역적으로 사용할 수 있게 공급한다 */}
            <UserConText.Provider value={userId}>
            <h1>Context Api 사용하기 - AppCtx(부모-provider)</h1>
            <Profile/>
            </UserConText.Provider>
        </div>
    )
}

function Profile() {
    return (
        <div className='alert alert-primary'>
            <h3>MyProfile</h3>
            <p>Context를 이용해 데이터를 전달받습니다
            </p>
            <Greeting/>
        </div>
    )
}
function Greeting(){
    return (
        <UserConText.Consumer>
            {(userId) => (
            <div className='alert alert-danger'>
                <h4>저는 프론트엔드 개발자 {userId} 입니다</h4>
            </div>
            )}
        </UserConText.Consumer>
    )
}

