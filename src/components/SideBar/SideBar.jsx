import React, { Component } from "react";
import { Drawer, Select } from "antd/es";

import AddForm from "./Form/addForm";
import UpdateForm from "./Form/updateForm";

class SideBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: "",
    };
  }
  handleChange = (value) => {
    this.setState({
      selected: value,
    });
  };

  render() {
    const { Option } = Select;
    let getProps = this.props;
    let { selected } = this.state;
    return (
      <>
        <Drawer title="Manage Restraunt" placement={getProps.placement} closable={true} onClose={getProps.onClose} visible={getProps.visible} key={getProps.placement} width={720}>
          <Select showSearch placeholder="Select to Add/Update" onChange={this.handleChange}>
            <Option value="Add Product">Add Product</Option>
            <Option value="Update Product">Update Product</Option>
          </Select>
          {selected === "Add Product" ? <AddForm /> : selected === "Update Product" ? <UpdateForm /> : ""}
        </Drawer>
      </>
    );
  }
}

export default SideBar;
