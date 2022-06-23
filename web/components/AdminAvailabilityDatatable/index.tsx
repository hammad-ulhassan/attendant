import { Table, Input, Select } from "antd";

const AdminAvailablityDatatable = () => {
  const dataSource = [
    {
      key: "1",
      name: "Mike",
      age: 32,
      address: "10 Downing Street",
    },
    {
      key: "2",
      name: "John",
      age: 42,
      address: "10 Downing Street",
    },
  ];

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Age",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
    },
  ];

  return (
    <section
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "stretch",
        justifyContent: "center",
        gap: "1rem",
      }}
    >
      <div style={{ display: "flex", flexDirection: "row", gap: "1rem" }}>
        <Select defaultValue="name">
          <Select.Option value="name">Name</Select.Option>
          <Select.Option value="id">ID</Select.Option>
        </Select>
        <Input.Search placeholder="Search..." allowClear />
      </div>
      <Table dataSource={dataSource} columns={columns} />
    </section>
  );
};

export default AdminAvailablityDatatable;
