import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

export default class RouterPage extends Component {
    render() {
        return (
            <div>
                <h3>RouterPage</h3>
                <Router>
                    <Link to="/">首页</Link>
                    <Link to="/user">用户中心</Link>
                    {/* children优先级更高 其次是component 最低是render*/}
                    {/* Switch独占路由 */}
                    <Switch>
                        <Route 
                            exact 
                            path="/" 
                            component={HomePage}
                            children={() => <div>children</div>}
                            render={() => <div>render</div>}/>
                        <Route path="/user" component={UserPage}/>
                        <Route component={EmptyPage}/>
                    </Switch>
                </Router>
            </div>
        )
    }
}


class HomePage extends Component {
    render() {
        return (
            <div>
                <h3>HomePage</h3>
            </div>
        )
    }
}

class UserPage extends Component {
    render() {
        return (
            <div>
                <h3>UserPage</h3>
            </div>
        )
    }
}

class EmptyPage extends Component {
    render() {
        return (
            <div>
                <h3>EmptyPage</h3>
            </div>
        )
    }
}