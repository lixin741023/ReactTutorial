import React from 'react';

class A_Switch extends React.Component {
    constructor (props) {
        super(props);
        this.change = this.change.bind(this);
        this.state = {
            whether: true
        }
    }
    change (eve) {
        this.setState((state) => ({
            whether: !state.whether
        }));
        console.log(eve); // #1
    }
    render () {
        return (
            <div className='bor'>
                <button onClick={this.change}>
                    {this.state.whether ? 'ON' : 'OFF'}
                </button>
            </div>
        )
    }
}

export { A_Switch };

// #1 这里会 隐式传递 1个参数，十分类似于 原生JS 中的 event。
// <|它是 React 根据 W3C规范 合成出的一个 事件。
