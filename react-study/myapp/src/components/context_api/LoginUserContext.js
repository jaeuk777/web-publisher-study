import { createContext, useContext, useState} from 'react'
// import context from 'react-bootstrap/esm/AccordionContext'

const LoginUserContext = createContext(undefined)

export const useLoginUser = () => {
    const context = useContext(LoginUserContext)
    if(!context) {
        throw new Error('useLoginUser 는 LoginUserProvider내에서 사용해야 해요')
    }
    return context;
}
export const LoginUserProvider=({children})=> {
    const [user, setUser] = useState(null);
    const loginAuthUser = (userInfo) => {
        setUser(userInfo)
    }
    const logoutUser = () => { //로그아웃시
        setUser(null)
    }

    return <LoginUserContext.Provider value={{user, loginAuthUser, logoutUser}}>{children}</LoginUserContext.Provider>
}
