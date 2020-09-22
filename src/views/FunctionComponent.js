import React, { useState, useEffect } from "react";

export default function FunctionComponent(props) {
    const [date, setDate] = useState(new Date())
    // 副作用 相当于class组件中componentDidMount componentDidUpdate componentWillUnmount集合
    useEffect(() => {
        const timer = setInterval(() => {
            setDate(new Date());
        }, 1000)
        // 组件卸载之前清除定时器
        return () => clearInterval(timer)
    }, [])
    return (
        <div>
            <h3>Function Component</h3>
            <p>{date.toLocaleTimeString()}</p>
        </div>
    )
}