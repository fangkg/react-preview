import React, { Component } from "react";
import TopBar from "../components/TopBar.vue";
import BottomBar from "../components/BottomBar.vue";

export default class Layout extends Component {
    componentDidMount() {
        const { title = "商城" } = this.props;
        // 更改当前title
        document.title = title;
    }
    render() {
        const { children, showTopBar, showBottomBar } = this.props
        console.log('children:', children)
        return (
            <div>
                { showTopBar && <TopBar/> }
                <h3>Layout</h3>
                {/* {this.props.children} */}
                { children.content }
                { children.txt }
                <button onClick={children.btnClick}></button>
                { showBottomBar && <BottomBar/> }
            </div>
        )
    }
}