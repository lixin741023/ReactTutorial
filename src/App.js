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

class App extends Component {
  render() {
    return (
        <div className='shell'>
            <A_Profile name='嘎嘎' />
            <B_Time />
            <A_Switch />
            <B_Trigger />
        </div>
    )
  }
}

export default App;
