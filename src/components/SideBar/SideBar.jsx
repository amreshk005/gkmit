import React from "react";
import { Drawer } from "antd/es";

function SideBar(props) {
  return (
    <>
      <Drawer title="Basic Drawer" placement={props.placement} closable={true} onClose={props.onClose} visible={props.visible} key={props.placement}>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Drawer>
    </>
  );
}

export default SideBar;
