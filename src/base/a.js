import React from 'react';

let value = 'Vue同样牛逼';

const sayHi = <h1>Hello World</h1>;
const sayYes = (
    <div>
        <p>react</p>
        <p>多牛逼啊～～</p>
        <p>{value}</p>
    </div>
);

export { sayHi };
export { sayYes };

// 为了便于阅读，我们会将 JSX 拆分为多行。
// 同时，我们建议将内容包裹在括号中，虽然这样做不是强制要求的，但是这可以避免遇到自动插入分号陷阱。
// 自动分号 陷阱：https://stackoverflow.com/questions/2846283/what-are-the-rules-for-javascripts-automatic-semicolon-insertion-asi

// 个人建议：如果需要的 html 超过1行，则分行写，并且使用 括号。
