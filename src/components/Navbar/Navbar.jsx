import React, { Component } from "react";
import { Row, Col, Layout, PageHeader, Button } from "antd/es/";
import { connect } from "react-redux";
import SideBar from "../SideBar/SideBar";
import { Link } from "react-router-dom";
import { handleAuth } from "../../redux/action";

const { Header } = Layout;

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      placement: "right",
      auth: false,
      LoggedIn: {},
    };
  }
  showDrawer = () => {
    this.setState({
      visible: true,
    });
  };

  onClose = () => {
    console.log("hhelo");
    this.setState({
      visible: false,
    });
  };

  onChange = (e) => {
    this.setState({
      placement: e.target.value,
    });
  };

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.LoggedIn !== prevState.LoggedIn) {
      let { username, isLoggedIn } = nextProps.LoggedIn;
      console.log(nextProps.users);
      let getType = nextProps.users.find((e) => e.username == username);
      console.log(getType, "getType");
      return getType.type === "admin" && isLoggedIn === true ? { auth: true, LoggedIn: getType } : "";
      // return { data: restaurant };
    }
    return null;
  }
  render() {
    const { placement, visible } = this.state;
    console.log(this.props);
    return (
      <>
        <Header className="site-layout-background" style={{ padding: 0 }}>
          <Row justify="space-between">
            <Col span="col-8">
              <Link to="/">
                <PageHeader title="Resto" onClick={this.showDrawer} />
              </Link>
            </Col>
            <Col style={{ paddingRight: "30px" }} span="col-8">
              {this.state.auth ? (
                <>
                  <SideBar placement={placement} visible={visible} onClose={this.onClose} />
                  <Row align="center" justify="space-between" style={{ marginTop: "12px" }}>
                    <Button onClick={this.showDrawer}>Manage Restoraunt</Button>
                    <Button onClick={this.props.handleAuth}>Logout</Button>
                  </Row>
                </>
              ) : (
                <div onClick={this.props.handleAuth}>Login</div>
              )}
            </Col>
          </Row>
        </Header>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    LoggedIn: state.LoggedIn,
    users: state.users,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    handleAuth: () => dispatch(handleAuth()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
