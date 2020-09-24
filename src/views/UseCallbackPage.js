import React, { useState, PureComponent, useCallback } from "react";

export default function UseCallbackPage(props) {
    const [count, setCount] = useState(0);

    const addClick = useCallback(() => {
        let sum = 0;
        for(let i = 0; i < count; i++) {
            sum += i;
        }
        return sum;
        // 依赖项数组发生改变 回调函数才会重新执行
    }, [count])

    const [value, setValue] = useState("")

    return (
        <div>
            <h3>UseCallbackPage</h3>
            <p>count: {count}</p>
            <button onClick={() => setCount(count + 1)}></button>
            <input value={value} onChange={event => setValue(event.target.value)}/>
            <Child addClick={addClick}/>
        </div>
    )
}


// useCallback把回调函数传递给经过优化的并使用引用相等性去避免非必要渲染的子组件时非常有用。
class Child extends PureComponent {
    render() {
        const { addClick } = this.props;
        return (
            <div>
                <h3>Child</h3>
                <button onClick={() => console.log(addClick())}></button>
            </div>
        )
    }
}