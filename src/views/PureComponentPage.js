import React, { Component } from "react";

// export default class PureComponentPage extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             count: 1
//         }
//     }
//     setCount = () => {
//         this.setState({ count: 100 })
//     }
//     shouldComponentUpdate(nextProps, nextState) {
//         // 值放生变化时才渲染
//         return nextState.count !== this.state.count
//     }
//     render() {
//         const { count } = this.state
//         return (
//             <div>
//                 <h3>PureComponentPage</h3>
//                 <button onClick={this.setCount}>{count}</button>
//             </div>
//         )
//     }
// }

// 可以直接继承PureComponent 省去shouldComponentUpdate()
export default class PureComponent extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            // 浅比较 对象嵌套深的时候不会更新
            obj: {
                num: 1
            }

        }
    }
    setCount = () => {
        this.setState({ count: 100, obj: { num: 100 } });
    };

    render() {
        const { count } = this.state;
        return (
            <div>
                <h3>PureComponent</h3>
                <button onClick={this.setCount}>{count}</button>
            </div>
        )
    }
}
