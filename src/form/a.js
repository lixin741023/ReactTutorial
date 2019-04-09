// React 的 state 是各个标单项的 唯一数据源，并且也只能使用 setState方法 来更新。

import React from 'react';

class A_Form extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            value1: '',
            value2: '嘎嘎^^',
            value3: '2'
        }
    }
    value1 = (event) => {
        this.setState({
            value1: event.target.value.toUpperCase()
        })
    }
    value2 = (event) => {
        this.setState({
            value2: event.target.value
        })
    }
    value3 = (event) => {
        this.setState({
            value3: event.target.value
        })
    }
    render () {
        return (
            <div className='bor'>
                <form action="">
                    <input
                      placeholder='请输入……'
                      type="text"
                      value={this.state.value1}
                      onChange={this.value1}
                    />
                    <textarea
                      placeholder='请输入……'
                      value={this.state.value2}
                      onChange={this.value2}
                    >
                    </textarea>
                    <select
                      value={this.state.value3}
                      onChange={this.value3}
                    >
                      <option value="1">11</option>
                      <option value="2">22</option>
                      <option value="3">33</option>
                    </select>
                </form>
            </div>
        )
    }
}

export { A_Form }
