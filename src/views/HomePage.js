import React, { Component } from "react";
import Layout from "./Layout";

export default class HomePage extends Component {
    render() {
        return (
            <Layout showTopBar={false} showBtootmBar={true} title="商城首页">
                {/* <div>
                    <h3>HomePage</h3>
                </div> */}
                {{
                    content: (
                        <div>
                            <h3>HomePage</h3>
                        </div>
                    ),
                    txt: "这是文本！",
                    btnClick: () => { console.log('事件') }
                }}
            </Layout>
        )
    }
}