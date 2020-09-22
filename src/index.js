// 负责逻辑控制、数据
import React from 'react';
// 渲染实际dom vdom -> dom
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import logo from "./logo.svg"

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

// jsx
// 基本使用，表达式用{}包裹
// const name = "React入门";
// const jsx = <div>Hello {name}!</div>

// 函数
// const obj = {
//   firstName: "Harry",
//   lastName: "Potter"
// }
// function formatName(name) {
//   return name.firstName + " " + name.lastName;
// }


// 对象
// const greet = <div>greet</div>

// 条件语句
// const show = true;

// 数组
// const arr = [0, 1, 2, 3, 4]
// const jsx = (
//   <div>
//     <div>{formatName(obj)}</div>
//     {greet}
//     {show ? greet : "登录"}
//     {show && greet}
//     <ul>
//       { arr.map(item => (
//         <li key={item}>{item}</li>
//         ))}
//     </ul>
//     <img src={logo} className="logo" style={{width: "30px", height: "30px" }}/>
//   </div>
// )
// ReactDOM.render(jsx, document.getElementById("root"))

