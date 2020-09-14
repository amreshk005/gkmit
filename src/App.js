import React from "react";
import "./App.css";
import "antd/dist/antd.css";

import Restaurant from "./components/Restaurant/Restaurant";
import Navbar from "./components/Navbar/Navbar";

import { Route, Switch } from "react-router-dom";
import { Layout } from "antd/es/";
import MenuDetail from "./components/menuDetail/MenuDetail";
const { Content } = Layout;

class App extends React.Component {
  state = {
    collapsed: false,
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  render() {
    console.log(this.props);
    return (
      <Layout className="site-layout">
        <Navbar />
        <Content
          className="site-layout-background"
          style={{
            margin: "15px 5px",
            minHeight: "87vh",
          }}
        >
          <Switch>
            <Route path="/" exact render={() => <Restaurant />} />
            <Route path="/menu" render={({ history }) => <MenuDetail history={history} />} />
          </Switch>
        </Content>
      </Layout>
    );
  }
}

export default App;
