import { Tabs } from "antd";
import AdminAvailablityDatatable from "../AdminAvailabilityDatatable";
import { AVAILABLE, ONLEAVE, UNAVAILABLE } from "./constants";

const TodayAvailability = () => {
  return (
    <Tabs defaultActiveKey="1">
      <Tabs.TabPane tab={AVAILABLE} key="1">
        <AdminAvailablityDatatable />
      </Tabs.TabPane>
      <Tabs.TabPane tab={UNAVAILABLE} key="2">
        <AdminAvailablityDatatable />
      </Tabs.TabPane>
      <Tabs.TabPane tab={ONLEAVE} key="3">
        <AdminAvailablityDatatable />
      </Tabs.TabPane>
    </Tabs>
  );
};

export default TodayAvailability;
