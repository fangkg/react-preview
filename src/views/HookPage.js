import React, { useState, useEffect } from "react";

export default function HookPage(props) {
    // 定义一个名为count的state变量 初始化为0
    const [count, setCount] = useState(0)
    const [date, setDate] = useState(new Date())
    // 函数组件中使用副作用
    useEffect(() => {
        // 只有在count发生改变的时候执行
        document.title = `点击了${count}次！`
    }, [count]) 

    useEffect(() => {
         // 时钟 只需要在didMount的时候执行
         const timer = setInterval(() => {
            setDate(new Date())
        }, 1000)

        // 清除定时器 类似willUnmount
        return () => clearInterval(timer)
    }, []) // 没有依赖项时为空数组

    return (
        <div>
            <h3>HookPage</h3>
            <p>{count}</p>
            <button onClick={() => setCount(count + 1)}>add</button>
            <p>{date.toLocaleTimeString()}</p>
        </div>
    )
}