import React, { Component } from "react";
import store from "../store/index";
import { connect } from "react-redux";

// export default class ReduxPage extends Component {
//     componentDidMount() {
//         // 当state变化时通知view更新
//         store.subscribe(() => {
//             // 当前页面重新渲染
//             this.forceUpdate()
//         })
//     }

//     render() {
//         console.log('store:', store)
//         // dispatch 派发方法
//         // subscribe 订阅方法
//         // getState 获取状态
//         return (
//             <div>
//                 <h3>ReduxPage</h3>
//                 <p>{store.getState()}</p>
//                 <button onClick={() => store.dispatch({ type: "ADD" })}>add</button>
//             </div>
//         )
//     }
// }


export default connect(
    // mapStateToProps 把state映射到props
    state => ({num: state}),
    // mapDispatchToProps 把dispatch映射到props
    {
        add: () =>({type: "ADD"})
    }
)( class ReactReduxPage extends Component {
    render() {
        // 默认把dispatch映射到props上
        console.log('props:', this.props)
        const { num, dispatch, add } = this.props;
        return (
            <div>
                <h3>ReactReduxPage</h3>
                <p>{num}</p>
                {/* <button onClick={() => dispatch({type: "ADD"})}></button> */}
                <button onClick={add}></button>
            </div>
        );
    }
})