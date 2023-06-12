import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Layout, Menu, theme } from "antd";
import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useNavigate,
} from "react-router-dom";
import NewPaper from "./NewPaper";
import SelectFields from "./SelectFields";
const { Header, Content, Footer, Sider } = Layout;

const Home = () => {
  const navigate = useNavigate();
  const menuItems = [
    { label: "Home", key: 1, url: "/" },
    { label: "New Question Paper", key: 2, url: "/ques" },
    { label: "Previous Question Paper", key: 3, url: "/pre-que" },
    { label: "Edit Qustions", key: 4, url: "/edit-que" },
  ];
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout style={{ height: "100vh" }}>
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
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["1"]}
          items={menuItems.map(({ label, key }) => {
            return { label: label, key: key };
          })}
          onClick={(e) => {
            console.log(e, menuItems[e?.key - 1]?.url);
            navigate(menuItems[e?.key - 1]?.url);
          }}
        />
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
            backgrounReactd: colorBgContainer,
            height:'0vh',
          }}
        />
        <Content
          style={{
            margin: "24px 16px 0px",
            height:"80vh"
          }}
        >
          <div
            style={{
              padding: 24,
              minHeight: '80vh',
              background: colorBgContainer,
            }}
          >
            <Routes>
              <Route exact path="/" element={<h1>HomePage</h1>}></Route>
              <Route path="/ques" element={<NewPaper />}></Route>
                {/* <Route path="add-filt" element={<SelectFields/>} /> */}

              <Route path="/pre-que" element={<h1>Previous Paper</h1>}></Route>
              <Route path="/edit-que" element={<h1>Edit Question</h1>}></Route>
            </Routes>
          </div>
        </Content>
        <Footer
          style={{
            height: "5px",
            textAlign: "center",
          }}
        >
          ©2023 Created by K12 Techno
        </Footer>
      </Layout>
    </Layout>
  );
};
export default Home;
