import React, { Component } from "react";
import "antd/dist/antd.css";
import { Form, Input, InputNumber, Button } from "antd";

export default class UpdateForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      layout: {
        labelCol: {
          span: 8,
        },
        wrapperCol: {
          span: 16,
        },
      },
    };
  }

  render() {
    return (
      <>
        <Form {...layout} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>
          <Form.Item
            name={["user", "name"]}
            label="Name"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name={["user", "email"]}
            label="Email"
            rules={[
              {
                type: "email",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name={["user", "age"]}
            label="Age"
            rules={[
              {
                type: "number",
                min: 0,
                max: 99,
              },
            ]}
          >
            <InputNumber />
          </Form.Item>
          <Form.Item name={["user", "website"]} label="Website">
            <Input />
          </Form.Item>
          <Form.Item name={["user", "introduction"]} label="Introduction">
            <Input.TextArea />
          </Form.Item>
          <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </>
    );
  }
}
