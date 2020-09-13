import React, { Component } from "react";
import { Card, Row } from "antd";
import { Col } from "antd/es";
import "./MenuDetail.css";
import { v4 as uuidv4 } from "uuid";
import { connect } from "react-redux";

const { Meta } = Card;

class MenuDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedResto: [],
    };
  }
  componentDidMount() {
    let { state } = this.props.history.location;
    let newArray;
    this.props.restaurants.forEach((e, index) => {
      if (e.restaurant === state) {
        newArray = e.menuItem;
      }
    });
    this.setState({
      selectedResto: newArray,
    });
  }
  render() {
    let { selectedResto } = this.state;
    return (
      <>
        <Row className="menu_list" align="middle">
          {selectedResto.map((i) => (
            <Col className="menu_item" key={uuidv4()} span={7}>
              <Card style={{ width: 300, padding: "10px" }} cover={<img alt="example" src="https://b.zmtcdn.com/data/pictures/2/20172/a3f876979c7b1a123ff8d0548d774cb1.jpg?output-format=webp&fit=around|1029:555&crop=1029:555;*,*" />}>
                <Meta title={i.foodName} description="This is the description" />
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
