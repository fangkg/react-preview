import React, { useState, useEffect } from "react";


export default function CustomHookPage(props) {

    return (
        <div>
            <h3>CustomHookPage</h3>
            <p>{useClock.toLocaleString()}</p>
        </div>
    )
}

// 自定义hook use开头
function useClock() {
    const [date, setDate] = useState(new Date());
    useEffect(() => {
        const timer = setInterval(() => {
            setDate(new Date())
        }, 1000)
        return () => clearInterval(timer);
    }, [])

    return date;
}

// Hook使用规则
// 只能在函数最外层调用hook 不要在循环、条件判断或者子函数中调用
// 只能在React函数的组件中调用Hook 不要在其它javascript函数中调用
// 自定义Hook中也可以调用