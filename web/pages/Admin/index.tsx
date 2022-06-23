import { Avatar, Button, Divider, Typography, Tabs } from "antd";
import React from "react";
import { SimpleCard } from "../../shared/style";
import { SettingOutlined, LogoutOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { OVERALLSTATS, TODAYSAVIALABILITY } from "./contants";
import TodayAvailability from "../../components/TodayAvailability";
import OverallStats from "../../components/OverallStats";
const { Title } = Typography;

const Admin = () => {
  const navigate = useNavigate();

  const logout = () => {
    navigate("/login");
  };

  return (
    <article
      style={{
        display: "flex",
        alignItems: "stretch",
        justifyContent: "center",
        height: "100%",
        flexDirection: "column",
        gap: "2%",
      }}
    >
      <SimpleCard>
        <section
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "flex-start",
            width: "100%",
            height: "100%"
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "flex-start",
              gap: "2%",
              width: "100%",
            }}
          >
            <Avatar size={100} />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                gap: "1%",
              }}
            >
              <Title style={{ margin: 0 }}>John Doe</Title>
              <Title style={{ margin: 0 }} level={5}>
                Admin
              </Title>
              <Title style={{ margin: 0 }} level={5}>
                Administration
              </Title>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              alignItems: "flex-end",
              height: "100%",
            }}
          >
            <Button type="default" onClick={logout} icon={<LogoutOutlined />}>
              Logout
            </Button>
            <Button type="default" icon={<SettingOutlined />}/>
          </div>
        </section>
        <Divider />
        <Tabs defaultActiveKey="1" tabPosition="left">
          <Tabs.TabPane tab={TODAYSAVIALABILITY} key="1">
            <TodayAvailability />
          </Tabs.TabPane>
          <Tabs.TabPane tab={OVERALLSTATS} key="2">
            <OverallStats />
          </Tabs.TabPane>
        </Tabs>
      </SimpleCard>
    </article>
  );
};

export default Admin;
