// React 的事件 有很多种写法

import React from 'react';

class B_Trigger extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            num1: 1,
            num2: 1,
            num3: 1,
            num4: 1
        };
        this.num1 = this.num1.bind(this);
    }
    num1 (eve) {
        this.setState(state => ({
            num1: ++state.num1
        }))
    }
    num2 = (eve) => {
        this.setState((state) => ({
            num2: ++state.num2
        }))
    }
    num3 (eve) {
        this.setState(state => ({
            num3: ++state.num3
        }))
    }
    num4 (eve) {
        this.setState(state => ({
            num4: ++state.num4
        }))
    }
    render () {
        return (
            <div className='bor'>
                <p>{this.state.num1}</p>
                <p>{this.state.num2}</p>
                <p>{this.state.num3}</p>
                <p>{this.state.num4}</p>
                <button onClick={this.num1}>第一+</button>
                <button onClick={this.num2}>第二+</button>
                <button onClick={(eve) => this.num3(eve)}>第三+</button>
                <button onClick={this.num4.bind(this)}>第四+</button>
            </div>
        )
    }
}

export { B_Trigger };
// todo ing
