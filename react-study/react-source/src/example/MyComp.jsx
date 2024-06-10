import React, {Component} from "react";

class MyComp extends Component {
    
    static defaultProps = {
        mycolor: 'navy',
        bgcolor: 'beige',
        myspace:5
    }
    render() {
        // this.props를 이용하여 부모가 내려준 속성을 받는다
        // this.props.mycolor
        const {mycolor, bgcolor, myspace} = this.props
        const style = {
            backgroundColor:bgcolor,
            marginTop: myspace,
            marginBottom: myspace
        }
        return (
            <div style={style}>
                <h1 style={{color:mycolor}}>클래스형 컴포넌트 MyComp</h1>
            </div>
        )
    }
}
export default MyComp;