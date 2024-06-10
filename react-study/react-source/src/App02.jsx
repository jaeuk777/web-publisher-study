import './mystyle.css'

export default function App() {
    return (
        <div className="App02">
            <h1 id='' style={{color:'tomato'}}>App02</h1>
            <hr />
            <p className='m1'>Hello React</p>
            <p id='m2'>ID Selector</p>
            <label htmlfor='userName'>이름: </label>
            <input type="text" name="userName" id="userName"/>
            <br />
            <img src="./imgsrc/1017_1650_4748.jpg" alt=""/>
        </div>
    )
}