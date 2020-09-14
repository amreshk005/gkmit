import React from "react";
import "antd/dist/antd.css";
import { v4 as uuidv4 } from "uuid";
import { Form, Input, InputNumber, Space } from "antd";
import { MinusCircleOutlined } from "@ant-design/icons";
import { connect } from "react-redux";

function AddItem() {
  return (
    <>
      <Space key={field.key} style={{ display: "flex", marginBottom: 8 }} align="start">
        <Form.Item {...field} name={[field.name, "foodName"]} fieldKey={[field.fieldKey, "foodName"]} rules={[{ required: true, message: "Missing food name" }]}>
          <Input placeholder="Food Name" />
        </Form.Item>
        <Form.Item {...field} name={[field.name, "Quantity"]} fieldKey={[field.fieldKey, "Quantity"]} rules={[{ type: "number", min: 0, max: 10, message: "please enter btw 0 to 10" }]}>
          <InputNumber placeholder="Quantity" />
        </Form.Item>
        <Form.Item {...field} name={[field.name, "price"]} fieldKey={[field.fieldKey, "price"]} rules={[{ type: "number", min: 0, max: 5, message: "please enter btw 0 to 5" }]}>
          <InputNumber placeholder="Price" />
        </Form.Item>
        <MinusCircleOutlined
          onClick={() => {
            remove(field.name);
          }}
        />
      </Space>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    restaurants: state.restaurants,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(AddItem);
