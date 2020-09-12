import React, { Component } from "react";
import { Row, Col, Layout, PageHeader, Button } from "antd/es/";
import SideBar from "../SideBar/SideBar";
import { Link } from "react-router-dom";

const { Header } = Layout;

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = { visible: false, placement: "right" };
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
  render() {
    const { placement, visible } = this.state;

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
              <SideBar placement={placement} visible={visible} onClose={this.onClose} />
              <Button onClick={this.showDrawer}>Add Restoraunt</Button>
            </Col>
          </Row>
        </Header>
      </>
    );
  }
}

export default Navbar;
