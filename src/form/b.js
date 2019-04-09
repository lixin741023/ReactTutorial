// 处理多个输入

import React from 'react';

class B_Form extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            value1: '',
            value2: '',
            value3: '',
            value4: ''
        }
    }
    change = (event) => { // 一次性处理多个输入
        let target = event.target.name;
        let value = event.target.value;
        this.setState({
            [target]: value
        })
    }
    render () {
        return (
            <div className='bor'>
                <form action="">
                    <input type="text" name='value1' value={this.state.value1} onChange={this.change} />
                    <input type="text" name='value2' value={this.state.value2} onChange={this.change} />
                    <input type="text" name='value3' value={this.state.value3} onChange={this.change} />
                    <select name="value4" value={this.state.value4} onChange={this.change}>
                        <option value="1">11</option>
                        <option value="2">22</option>
                        <option value="3">33</option>
                    </select>
                </form>
            </div>
        )
    }
}

export { B_Form }
