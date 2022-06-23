import { Avatar, Button, Divider, Typography } from "antd";
import { HistoryOutlined, LogoutOutlined } from "@ant-design/icons";
import { useState } from "react";
import HistoryModal from "../../components/HistoryModal";
import { useNavigate } from "react-router-dom";
import { SimpleCard } from "../../shared/style";
import Logo from "../../components/Logo";
const { Title } = Typography;

const User = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const navigate = useNavigate();

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

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
                  Developer
                </Title>
                <Title style={{ margin: 0 }} level={5}>
                  SE
                </Title>
              </div>
            </div>
            <Button type="default" onClick={logout} icon={<LogoutOutlined />}>
              Logout
            </Button>
          </section>
          <Divider />
          <section
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "flex-start",
              width: "100%",
            }}
          >
            <Title level={2}>June 22, 2022</Title>
            <Button
              type="default"
              icon={<HistoryOutlined />}
              onClick={showModal}
            >
              View Attendance History
            </Button>
          </section>
          <section
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "flex-start",
              width: "100%",
            }}
          >
            <Button type="primary">Punch In</Button>
            <Button type="default">Apply for Leave</Button>
          </section>
          <HistoryModal
            isVisible={isModalVisible}
            handleOk={handleOk}
            handleCancel={handleCancel}
          />
      </SimpleCard>
    </article>
  );
};

export default User;
