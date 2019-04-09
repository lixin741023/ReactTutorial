import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './styles/global.css';

import {
    sayHi,
    sayYes
} from "./base/a";
import { A_Profile } from "./components/a";
import { B_Time } from "./components/b";
import { A_Switch } from "./event/a";
import { B_Trigger } from "./event/b";
import { KnowLedgeList } from './列表andKeys/a';
import { A_Form } from "./form/a";
import { B_Form } from "./form/b"
import { Box } from "./statusUp/a";

class App extends Component {
  render() {
    return (
        <div className='shell'>
            <A_Profile name='嘎嘎' />
            <B_Time />
            <A_Switch name='A_Switch_props' />
            <B_Trigger />
            <KnowLedgeList list={['a','b','c']} />
            <A_Form />
            <B_Form />
            <Box />
        </div>
    )
  }
}

export default App;
