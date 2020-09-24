import React, { Component } from "react";
import PropTypes from "prop-types";


export default class LifeCyclePage extends Component {
    static defaultProps = {
        msg: "lll"
    }
    static propTypes = {
        msg: PropTypes.string // .isRequired
    }
    constructor(props) {
        super(props);
        this.state = { count: 0 };
        console.log("constructor");
    }

    componentWillMount() {
        console.log('componentWillMount')
    }

    componentDidMount() {
        console.log('componentDidMount')
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('shouldComponentUpdate')
        return true;
    }

    componentWillUpdate() {
        console.log('componentWillUpdate')
    }

    componentDidUpdate() {
        console.log('componentDidUpdate')
    }

    setCount = () => {
        this.setState({
            count: this.state.count + 1
        })
    }

    render() {
        console.log("render:", this.props);
        const { count } = this.state;
        return (
            <div>
                <h3>LifeCyclePage</h3>
                <p>{count}</p>
                <button onClick={this.setCount}>改变count</button>
                { count % 2 && <Child count={count}/> }
                <Child count={count}/>
            </div>
        )
    }
}


class Child extends Component {
    // 初始渲染的时候不会执行 改变count时接收新值会改变
    componentWillReceiveProps(nextProps) {
        console.log('componentWillReceiveProps', nextProps)
    }

    componentWillUnmount() {
        console.log("componentWillUnmount")
    }

    render() {
        console.log('child:', this.props.count)
        const { count } = this.props
        return (
            <div>
                <h3>Child</h3>
                <p>{count}</p>
            </div>
        )
    }
}