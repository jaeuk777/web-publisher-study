import {FC} from 'react'
// import Header = require('./pages/Header')
import Header from './pages/Header'
// import type Header from "./pages/Header"
import { Container, Row, Col } from 'react-bootstrap'
import PageNotFound from './pages/PageNotFound'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import SignUp from './components/SignUp'
import PostForm from './components/PostForm'


interface AppProps{}
const App:FC<AppProps>=()=>{
  return (
    <>
      <BrowserRouter>
      <Header/>
      <div className='container py-5'>
        {/* <h1 className='text-primary'>App</h1> */}
        <div>
          <Routes>
            <Route path='/signup' element={<SignUp/>}/>
            <Route path='/postform' element={<PostForm/>}/>
            <Route path='*' element={<PageNotFound/>}/>
          </Routes>
        </div>
      </div>
      </BrowserRouter>
    </>
  )
}
  export default App;
