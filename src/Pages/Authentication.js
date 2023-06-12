import React from "react";
import Login from "../Components/Authentication/Login";
import { Tabs } from "antd";
import SignUp from "../Components/Authentication/SignUp";

const onChange = (key) => {
  console.log(key);
};

const items = [
  {
    key: '1',
    label: `Login`,
    children: <Login/>,
  },
  {
    key: '2',
    label: `SignUp`,
    children: <SignUp/>,
  },
];

const Auth = () => (
  <Tabs
    defaultActiveKey="1"
    centered
    items={items}
    onChange={onChange}
  />
);
export default Auth;
