import React, { useState, useEffect } from "react";
import "antd/dist/antd.css";
import { v4 as uuidv4 } from "uuid";
import { Form, Input, InputNumber, Button, Layout, Menu, Space, TimePicker } from "antd/es";
import { MinusCircleOutlined, PlusOutlined, HomeFilled } from "@ant-design/icons";
import { updateRestaurant } from "../../../redux/action";
import { connect } from "react-redux";

function UpdateForm(props) {
  let { RangePicker } = TimePicker;
  const [form] = Form.useForm();
  const [time, setTime] = useState("");
  const layout = {
    labelCol: {
      span: 8,
    },
    wrapperCol: {
      span: 16,
    },
  };

  const validateMessages = {
    required: "${label} is required!",
    types: {
      email: "${label} is not validate email!",
      number: "${label} is not a validate number!",
    },
    number: {
      range: "${label} must be between ${min} and ${max}",
    },
  };
  const [sidebarData, setSidebarData] = useState([]);
  const { Header, Content, Sider } = Layout;

  useEffect(() => {
    let restaurant = props.restaurants.map((e) => {
      return e.restaurant;
    });
    let getres = props.restaurants.find((e) => e.restaurant === restaurant[0]);
    form.setFieldsValue(getres);
    setSidebarData(restaurant);
  }, [props.restaurants]);

  const onFinish = (values) => {
    props.updateRestaurant(values);
  };

  const updataFilter = (item) => {
    let getres = props.restaurants.find((e) => e.restaurant === item);
    form.setFieldsValue(getres);
  };
  function onChange(time, timeString) {
    setTime(timeString);
  }

  return (
    <>
      <Layout style={{ marginTop: "20px" }}>
        <Sider
          breakpoint="lg"
          collapsedWidth="0"
          onBreakpoint={(broken) => {
            console.log(broken);
          }}
          onCollapse={(collapsed, type) => {
            console.log(collapsed, type);
          }}
        >
          <div className="logo" />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={["4"]}>
            {sidebarData.length
              ? sidebarData.map((item) => (
                  <Menu.Item key={uuidv4()} icon={<HomeFilled />} onClick={() => updataFilter(item)}>
                    {item}
                  </Menu.Item>
                ))
              : ""}
          </Menu>
        </Sider>
        <Layout>
          <Header className="site-layout-sub-header-background" style={{ padding: 0 }} />
          <Content style={{ margin: "24px 16px 0" }}>
            <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
              <Form className="restaurant_add_form" {...layout} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages} form={form}>
                <Form.Item
                  shouldUpdate
                  name="restaurant"
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
                  name="rating"
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
                {/* <Form.Item name={"hours"} label="Hours">
                  <RangePicker use12Hours format="h:mm a" onChange={onChange} />
                </Form.Item> */}
                <Form.List name="menuItem">
                  {(fields, { add, remove }) => {
                    return (
                      <div>
                        {fields.map((field) => (
                          <Space key={field.key} style={{ display: "flex", marginBottom: 8 }} align="start">
                            <Form.Item {...field} name={[field.name, "foodName"]} fieldKey={[field.fieldKey, "foodName"]} rules={[{ required: true, message: "Missing food name" }]}>
                              <Input placeholder="Food Name" />
                            </Form.Item>
                            <Form.Item {...field} name={[field.name, "Quantity"]} fieldKey={[field.fieldKey, "Quantity"]} rules={[{ type: "number", min: 0, max: 1000, message: "please enter btw 0 to 1000" }]}>
                              <InputNumber placehoplder="Quantity" />
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

                <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
                  <Button type="primary" htmlType="submit">
                    Add
                  </Button>
                </Form.Item>
              </Form>
            </div>
          </Content>
        </Layout>
      </Layout>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    restaurants: state.restaurants,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateRestaurant: (payload) => dispatch(updateRestaurant(payload)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UpdateForm);
