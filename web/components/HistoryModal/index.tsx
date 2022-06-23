import { Modal, DatePicker } from "antd";
import { useState } from "react";
import UserAttendanceHistoryDatatable from "../UserAttendanceHistoryDatatable";

export type HistoryModalPropType = {
  isVisible: boolean;
  handleOk: Function;
  handleCancel: Function;
};

const HistoryModal = (props: HistoryModalPropType) => {
  const handleOk = () => {
    // setIsModalVisible(false);
    props.handleOk();
  };

  const handleCancel = () => {
    // setIsModalVisible(false);
    props.handleCancel();
  };
  return (
    <Modal
      title="Attendance History"
      visible={props.isVisible}
      onOk={handleOk}
      onCancel={handleCancel}
    >
      <section
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "stretch",
          gap: "1rem",
          width: "100%"
        }}
      >
        <DatePicker />
        <UserAttendanceHistoryDatatable />
      </section>
    </Modal>
  );
};

export default HistoryModal;
