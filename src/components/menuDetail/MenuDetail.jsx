import React, { Component } from "react";
import { Card, Avatar, Row } from "antd";
import { EditOutlined, EllipsisOutlined, SettingOutlined } from "@ant-design/icons";
import { Col } from "antd/es";
import "./MenuDetail.css";
import { v4 as uuidv4 } from "uuid";
import { connect } from "react-redux";

const { Meta } = Card;

class MenuDetail extends Component {
  componentDidMount() {
    let { state } = this.props.history.location;

    let newArray = this.props.restaurants.filter((e) => e.restaurant === state);
    console.log(state, newArray);
  }
  render() {
    console.log(this.props);

    return (
      <>
        <Row className="menu_list" align="middle">
          {[1, 2, 3, 4, 5].map((i) => (
            <Col className="menu_item" key={uuidv4()} span={7}>
              <Card
                style={{ width: 300, padding: "10px" }}
                cover={<img alt="example" src="https://b.zmtcdn.com/data/pictures/2/20172/a3f876979c7b1a123ff8d0548d774cb1.jpg?output-format=webp&fit=around|1029:555&crop=1029:555;*,*" />}
                actions={[<SettingOutlined key="setting" />, <EditOutlined key="edit" />, <EllipsisOutlined key="ellipsis" />]}
              >
                <Meta avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />} title="Card title" description="This is the description" />
              </Card>
            </Col>
          ))}
        </Row>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    restaurants: state.restaurants,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(MenuDetail);
