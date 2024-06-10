import React, {Component} from "react";
import MyComp from "./example/MyComp";
export default class App extends Component {

    render() {
        return (
            <div>
                <h1 style={{color:'skyblue'}}>App03</h1>
                <hr style={{border:' 1px solid red;'}}/>
                {/* MyComp에 bgcolor속성, myspace 속성 */}
                <MyComp mycolor="white" bgcolor="skyblue" myspace="10px"></MyComp>
                <MyComp mycolor="green" bgcolor="lime" myspace="30px"/>
                <MyComp mycolor="blue" bgcolor="brown" myspace="30px"/>
            </div>
        )
    }
}