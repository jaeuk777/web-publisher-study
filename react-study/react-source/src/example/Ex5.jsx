import React, {Component} from 'react';

export default class HisComp extends Component {
    constructor(props){ // 생성자 : 객체가 생성될 때 호출되는 함수
        super(props)
        this.state={ // state데이터
            name:'홍길동',
            isLogin: false
        }
        this.onClickHandler=this.onClickHandler.bind(this)
    }
    onClickHandler = ()=>{
        // alert('hi')
        // this.state.isLogin값을 true로 변경할 예정
        // this.state.isLogin = true; //[X]
        this.setState({isLogin:!this.state.isLogin})
        // state값을 변경할 때는 반드시 setState()함수를 이용해 변경한다.
    }

    render() {
        return (
        <div>
            {/* jsx안에서는 제어문(if, for, while)을 사용할 수 없다. 표현식만 사용가능 
                조건문이 필요할 경우는 삼항연사자를 사용하던지, &&연산자를 사용할 수 있다.
                삼항연산자
                변수선언문 = (조건식)? 값1: 값2; // <== 삼항 연산자
                조건식이 true이면 값 1을 변수에 대입하고, false 이면 값2를 변수에 대입한다
            */}
            {this.state.isLogin?
                <h3>{this.state.name} 님 로그인 중...</h3>
                :
                <h3>로그인 하세요</h3>
            }
            {/* html일 경우: 
            <button onclick="onClickHandler">Toggle</button> 
            */}
            <button onClick={this.onClickHandler}>Toggle</button>
        </div>
        )
    }

}