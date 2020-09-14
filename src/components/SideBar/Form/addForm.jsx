import React, { Component } from "react";
import "../SideBar.css";
import { Form, Input, Button, InputNumber, Space, TimePicker } from "antd/es";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
import { connect } from "react-redux";
import { addRestaurant } from "../../../redux/action";

class AddForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: "",
      layout: {
        labelCol: {
          span: 8,
        },
        wrapperCol: {
          span: 16,
        },
      },
      tailLayout: {
        wrapperCol: {
          offset: 8,
          span: 16,
        },
      },
      validateMessages: {
        required: "${label} is required!",
        types: {
          number: "${label} is not a validate number!",
        },
        number: {
          range: "${label} must be between ${min} and ${max}",
        },
      },
      addRestraunt: {
        restrauntName: "",
        rating: undefined,
        menuItem: [],
      },
      menuInput: {
        foodName: "",
        Quantity: undefined,
        price: undefined,
      },
      time: "",
    };
  }

  onFinish = (values) => {
    console.log("Success:", values);
    this.props.addRestaurant({ ...values, hours: this.state.time });
  };

  onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  onChange = (time, timeString) => {
    console.log(time, timeString);
    this.setState({
      time: timeString,
    });
  };

  render() {
    let { RangePicker } = TimePicker;
    return (
      <>
        <Form className="restaurant_add_form" {...this.state.layout} name="nest-messages" onFinish={this.onFinish} validateMessages={this.state.validateMessages}>
          <Form.Item
            name={"restaurant"}
            label="Restaurant Name"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name={"rating"}
            label="Rating"
            rules={[
              {
                type: "number",
                min: 0,
                max: 5,
              },
            ]}
          >
            <InputNumber />
          </Form.Item>

          <Form.Item name={"hours"} label="Hours">
            <RangePicker use12Hours format="h:mm a" onChange={this.onChange} />
          </Form.Item>
          <Form.List name="menuItem">
            {(fields, { add, remove }) => {
              return (
                <div style={{ marginLeft: "35%" }}>
                  {fields.map((field) => (
                    <Space key={field.key} style={{ display: "flex", marginBottom: 8 }} align="start">
                      <Form.Item {...field} name={[field.name, "foodName"]} fieldKey={[field.fieldKey, "foodName"]} rules={[{ required: true, message: "Missing food name" }]}>
                        <Input placeholder="Food Name" />
                      </Form.Item>
                      <Form.Item {...field} name={[field.name, "Quantity"]} fieldKey={[field.fieldKey, "Quantity"]} rules={[{ type: "number", min: 0, max: 1000, message: "please enter btw 0 to 1000" }]}>
                        <InputNumber placeholder="Quantity" />
                      </Form.Item>
                      <Form.Item {...field} name={[field.name, "price"]} fieldKey={[field.fieldKey, "price"]} rules={[{ type: "number", min: 0, max: 1000, message: "please enter btw 0 to 1000" }]}>
                        <InputNumber placeholder="Price" />
                      </Form.Item>
                      <MinusCircleOutlined
                        onClick={() => {
                          remove(field.name);
                        }}
                      />
                    </Space>
                  ))}

                  <Form.Item>
                    <Button
                      type="dashed"
                      onClick={() => {
                        add();
                      }}
                      block
                    >
                      <PlusOutlined /> Add Menu Item
                    </Button>
                  </Form.Item>
                </div>
              );
            }}
          </Form.List>

          <Form.Item wrapperCol={{ ...this.state.layout.wrapperCol, offset: 8 }}>
            <Button type="primary" htmlType="submit">
              Add
            </Button>
          </Form.Item>
        </Form>
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
  return {
    addRestaurant: (payload) => dispatch(addRestaurant(payload)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddForm);
