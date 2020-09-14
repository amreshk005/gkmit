import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Table, Button } from "antd/es";
import { StarFilled } from "@ant-design/icons";
import { connect } from "react-redux";
import { v4 as uuidv4 } from "uuid";

class Restaurant extends Component {
  constructor(props) {
    super(props);
    this.state = {
      columns: [
        {
          title: "Restaurant",
          dataIndex: "restaurant",
        },
        {
          title: "Rating",
          dataIndex: "rating",
          render: (text) => (
            <>
              {text}
              <StarFilled style={{ color: "#eb2f96" }} />
            </>
          ),
        },
        {
          title: "Hours",
          dataIndex: "hours",
        },
        {
          title: "tags",
          dataIndex: "viewDetail",
          render: ([restoName, text]) => (
            <Link to={(location) => ({ ...location, pathname: "/menu", state: restoName })}>
              {" "}
              <Button color="green">{text}</Button>{" "}
            </Link>
          ),
        },
      ],
      data: [],
    };
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    console.log(nextProps.restaurants);
    if (nextProps.restaurants !== prevState.data) {
      let restaurant = nextProps.restaurants.map((e) => {
        let item = {};
        item.restaurant = e.restaurant;
        item.hours = `${e.hours[0]} - ${e.hours[1]}`;
        item.rating = e.rating;
        item.viewDetail = [e.restaurant, "Show Menu"];
        return item;
      });
      return { data: restaurant };
    }
    return null;
  }

  render() {
    console.log(this.props.restaurants, this.state.data);
    return (
      <>
        <Table key={uuidv4()} columns={this.state.columns} dataSource={this.state.data} pagination={false} />
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    restaurants: state.restaurants,
  };
};

export default connect(mapStateToProps, null)(Restaurant);
