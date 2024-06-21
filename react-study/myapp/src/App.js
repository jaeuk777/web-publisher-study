import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'
import Header from './pages/Header';
import Side from './pages/Side';
import MyComp1 from './pages/MyComp1'
import { Container, Row, Col } from 'react-bootstrap';
import PageNotFound from './pages/PageNotFound';
import '../src/pages/Header.css'
import UserDetail from './components/UserDetail';
import BoardList from './components/BoardList';
import UseEffectHook from './components/UseEffectHook';
import LifeCycle from './components/LifeCycle';
import Clcok from './components/Clcok';
import UseRefHook from './components/UseRefHook';
import AppPropsDrill from './components/context_api/AppPropsDrill';
import AppCtx from './components/context_api/AppCtx';
import AppCtx2 from './components/context_api/App'
import UseMemoHook from './components/UseMemoHook';
import UseCallbackHook from './components/UseCallBackHook';
import ReactMemo from './components/ReactMemo';
import TodoApp from './components/Todo/TodoApp';
import SingleUser from './components/Ajax/SingleUser';
import ListUser from './components/Ajax/ListUser';
import OpenWeather from './components/Ajax/OpenWeather';
import NaverBookApp from './components/naverBook/NaverBookApp';
import SignUp from './components/Member/SignUp';
import MemberList from './components/Member/MemberList';
import LoginForm from './components/Member/LoginForm';
import { LoginUserProvider, useLoginUser } from './components/context_api/LoginUserContext';
import BoardApp from './components/Board/BoardApp';
import BoardView from './components/Board/BoardView';
// 로그인한 회원정보를 제공할 Context


function App() {
  return (
    <LoginUserProvider>
      <div className="container py-4" >
        <BrowserRouter>
        <Container>
          {/* Geader */}
          <Row>
            <Col xs={12}>
              <Header/>
            </Col>
          </Row>
          <Row>
            <Col xs={12} sm={3} md={4} className='d-none d-sm-block'>
              <Side/>
            </Col>
            <Col xs={12} sm={9} md={8} >
              <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/comp1'element={<MyComp1/>}/>
                <Route path='/users/:id' element={<UserDetail/>}/>
                <Route path='/board' element={<BoardList/>}/>
                <Route path='/life' element={<LifeCycle/>}/>
                <Route path='/hook1' element={<UseEffectHook/>}/>
                <Route path='/clock' element={<Clcok/>}/>
                <Route path='/hook2' element={<UseRefHook/>}/>
                <Route path='/app2' element={<AppPropsDrill/>}/>
                <Route path='/hook3' element={<AppCtx/>}/>
                <Route path='/hook4' element={<AppCtx2/>}/>
                <Route path='/hook5' element={<UseMemoHook/>}/>
                <Route path='/hook6' element={<UseCallbackHook/>}/>
                <Route path='/memo' element={<ReactMemo/>}/>
                <Route path='/todo' element={<TodoApp/>}/>
                <Route path='/ajax1/:id' element={<SingleUser/>}/>
                <Route path='/ajax2' element={<ListUser/>}/>
                <Route path='/ajax3' element={<OpenWeather/>}/>
                <Route path='/naver' element={<NaverBookApp/>}/>
                <Route path='/signup' element={<SignUp/>}/>
                <Route path='/members' element={<MemberList/>}/>
                <Route path='/login' element={<LoginForm/>}/>
                <Route path='/post' element={<BoardApp/>}/>
                <Route path='/post/:id' element={<BoardView/>}/>

                <Route path='*' element={<PageNotFound/>}/>
              </Routes>
            </Col>
          </Row>
        </Container>
        </BrowserRouter>
      </div>
    </LoginUserProvider>
  );
}

export default App;
