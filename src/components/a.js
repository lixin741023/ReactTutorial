// 函数组件

import React from 'react';

const A_Profile = function (props) {
    return (
        <div className='bor'>
            <p>我是1个简介组件</p>
            <p>我接收到的参数：{props.name}</p>
            <p>A_Profile</p>
        </div>
    )
};

export { A_Profile };
