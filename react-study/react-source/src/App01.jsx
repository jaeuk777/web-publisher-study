import JsxEx1 from './example/jsxEx1'
import {GetBrand, GetOS} from './example/JsxEx2'
import GetLang from './example/JsxEx3'
import { GetPet } from './example/JsxEx3';

function App() {
    const mystyle ={
        color: 'lightslategrey',
        textAlign:'center',
    };
    // const hrstyle ={
    //     border: '1px solid blue'
    // };

    return (
        <div>
            <h1 style={mystyle}>App</h1>
            <hr/>
            <JsxEx1></JsxEx1>
            <JsxEx1/>
            <hr/>
            <GetBrand></GetBrand>
            <GetOS/>
            <hr />
            <GetLang></GetLang>
            <GetPet></GetPet>
        </div>
    )
}
export default App;
// App01.jsx