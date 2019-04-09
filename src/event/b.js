// React 的事件调用 有很多种写法

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
    // 第一种写法：
    // 必须要在 构造函数 中绑定 this，否则 函数体 中的 this 等于 undefined。
    num1 (eve) {
        this.setState(state => ({
            num1: ++state.num1
        }))
    }
    // 第二种写法：
    // 如果认为在 构造函数 中绑定 this 这一步很麻烦，则可以使用正处于实验性的 public class fields 语法。
    // 写法如下：
    // 使用这样的书写方法，箭头函数中的 this 默认就绑定了。
    num2 = (eve) => {
        this.setState((state) => ({
            num2: ++state.num2
        }))
    }
    // 第三种写法：
    // 把 绑定this 这一步放在了 JSX 中：
    // 在回调中使用了 箭头函数 并绑定了 this。
    num3 (eve) {
        this.setState(state => ({
            num3: ++state.num3
        }))
    }
    // 第四种写法：
    // 把 绑定this 这一步放在了 JSX 中：
    // 使用 bind 新生成了1个函数，并绑定了 this。
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

// 第三、第四，2种写法的区别是：
// 一个需要 显式 的传递 event 参数。
// 一个默认 隐式 传递了 event 参数。


// 在开发中，我们推荐，并经常采用 第一种、第二种 事件调用的写法。
