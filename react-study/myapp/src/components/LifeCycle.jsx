import React, { Component } from 'react'

export default class LifeCycle extends Component {
    
    state = {
        color: 'red'
        
    }
    constructor(props) {
        super(props);
        console.log('LifeCycle생성자 호출됨 ', props)
    }
    componentDidMount() {
        console.log('componentDidMount()호출됨...')
    }
    componentDidUpdate() {
        console.log('componentDidUpdate()함수 호출됨')
        return true; // true 룰 반환하면 컴포넌트가 update된다
        // false를 반환하면 컴포넌트가 update되지 않는다.
    }
    componentWillUnmount() {
        console.log('componentWillUnmount() 호출됨')
    }
    
    render() {
        // console.log('render()호출됨')
        return (
            <div className='py-5'>
                <h1
                onMouseOver={()=>{this.setState({color:'green'})}}
                onMouseOut={()=> {this.setState({color:'orange'})}}
                style={{color:this.state.color}}>React Component Life Cycle</h1>
            </div>
        )
    }
}
