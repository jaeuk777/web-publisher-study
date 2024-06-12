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

function App() {
  return (
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
          <Col xs={12} sm={3} md={4} style={{border:'1px solid red'}}>
            <Side/>
          </Col>
          <Col xs={12} sm={9} md={8} style={{border:'1px solid green'}}>
            <Routes>
              <Route path='/' element={<Home/>} />
              <Route path='/comp1'element={<MyComp1/>}/>
              <Route path='/found' element={<PageNotFound/>}/>
            </Routes>
          </Col>
        </Row>
      </Container>
      </BrowserRouter>
    </div>
  );
}

export default App;
