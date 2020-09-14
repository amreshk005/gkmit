import React, { useState } from "react";
import { Form, Input, Button, Checkbox } from "antd";
import { deleteRestaurant } from "../../../redux/action";
import { connect } from "react-redux";
import "antd/dist/antd.css";

function DeleteForm(props) {
  const layout = {
    labelCol: {
      span: 8,
    },
    wrapperCol: {
      span: 16,
    },
  };
  const tailLayout = {
    wrapperCol: {
      offset: 8,
      span: 16,
    },
  };
  const onFinish = (values) => {
    // console.log("Success:", values);
    props.deleteRestaurant(values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <>
      <Form
        {...layout}
        name="basic"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item
          label="Restaurant Name"
          name="restaurant"
          rules={[
            {
              required: true,
              message: "Please input your restaurant name!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item {...tailLayout}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    deleteRestaurant: (payload) => dispatch(deleteRestaurant(payload)),
  };
};

export default connect(null, mapDispatchToProps)(DeleteForm);
