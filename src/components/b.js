// class组件

// state 的一些重要特性：
// 1、<|state 是完全私有的，完全受控于当前组件。其他组件不在乎也不知道别的组件的 state。
// 2、<|state 不可手动修改，需要调用 setState方法 来修改。
// 3、<|构造函数（constructor）是唯一可以给 state 赋值的一个地方。
// 4、<|state 的更新处于性能的考虑，是异步的！
// 5、<|state 可以通过 props 向下传递给其他组件。


import React from 'react';

class B_Time extends React.Component {
    constructor (props) {
      super(props);
      this.state = {
          time: new Date()
      }
    }
    componentDidMount() {
        this.tick();
    }
    componentWillUnmount() {
        clearInterval(this.tickTimer)
    }
    tick () {
        this.tickTimer = setInterval(() => {
            this.setState({time: new Date()})
        }, 1000);
    }
    render () {
        return (
            <div className='bor'>
                <p>我是一个class组件：B_Time</p>
                <p>{this.state.time.toLocaleTimeString()}</p>
            </div>
        )
    }
}

export { B_Time };

// React 的生命周期图：http://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/
