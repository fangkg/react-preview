import React, { Component } from "react";
import store from "../store/index"

export default class ReduxPage extends Component {
    componentDidMount() {
        // 当state变化时通知view更新
        store.subscribe(() => {
            // 当前页面重新渲染
            this.forceUpdate()
        })
    }

    render() {
        console.log('store:', store)
        // dispatch 派发方法
        // subscribe 订阅方法
        // getState 获取状态
        return (
            <div>
                <h3>ReduxPage</h3>
                <p>{store.getState()}</p>
                <button onClick={() => store.dispatch({ type: "ADD" })}>add</button>
            </div>
        )
    }
}