import React, { Component } from "react";

export default class SetStatePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
    }

    componentDidMount() {
        // 同步
        document.getElementById("test").addEventListener("click", this.setCount)
    }

    setCount = () => {
        // 异步写法
        // this.changeValue()

        // 同步写法 在setTimeout和原生js事件中是同步执行
        setTimeout(() => {
            this.changeValue()
        }, 0)
    }

    changeValue = v => {
        // 异步 合成事件、生命周期中 批量更新 优化性能
        this.setState({
            count: this.state.count + v
        })

        // 链式调用 加多个值
        // this.setState(state => {
        //     return {
        //         count: state.count + v
        //     }
        // })
    }

    render() {
        return (
            <div>
                <h3>SetStatePage</h3>
                <button onClick={this.setCount}>{this.state.count}</button>
                <button id="test"></button>
            </div>
        )
    }
}