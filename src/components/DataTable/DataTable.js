import React, { useState, useRef } from "react";
import { SearchOutlined } from "@ant-design/icons";
import { Button, Input, Space, Table } from "antd";
import Highlighter from "react-highlight-words";
import { Container, Icon, MinorIcon, MultiplierInput } from "./styles";

const DataTable = (props) => {
  const { data } = props;
  const dataContent = data.crafts;
  const [multipleCrafts, setMultipleCrafts] = useState(2);
  const [searchText, setSearchText] = useState("");
  const [searchedColumn, setSearchedColumn] = useState("");
  const searchInput = useRef(null);

  const handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    setSearchText(selectedKeys[0]);
    setSearchedColumn(dataIndex);
  };
  const handleReset = (clearFilters) => {
    clearFilters();
    setSearchText("");
  };
  const getColumnSearchProps = (dataIndex) => ({
    filterDropdown: ({
      setSelectedKeys,
      selectedKeys,
      confirm,
      clearFilters,
      close,
    }) => (
      <div
        style={{
          padding: 8,
        }}
        onKeyDown={(e) => e.stopPropagation()}
      >
        <Input
          ref={searchInput}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={(e) =>
            setSelectedKeys(e.target.value ? [e.target.value] : [])
          }
          onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
          style={{
            marginBottom: 8,
            display: "block",
          }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
            icon={<SearchOutlined />}
            size="small"
            style={{
              width: 90,
            }}
          >
            Search
          </Button>
          <Button
            onClick={() => clearFilters && handleReset(clearFilters)}
            size="small"
            style={{
              width: 90,
            }}
          >
            Reset
          </Button>
          <Button
            type="link"
            size="small"
            onClick={() => {
              confirm({
                closeDropdown: false,
              });
              setSearchText(selectedKeys[0]);
              setSearchedColumn(dataIndex);
            }}
          >
            Filter
          </Button>
          <Button
            type="link"
            size="small"
            onClick={() => {
              close();
            }}
          >
            close
          </Button>
        </Space>
      </div>
    ),
    filterIcon: (filtered) => (
      <SearchOutlined
        style={{
          color: filtered ? "#1677ff" : undefined,
        }}
      />
    ),
    onFilter: (value, record) =>
      record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
    onFilterDropdownOpenChange: (visible) => {
      if (visible) {
        setTimeout(() => searchInput.current?.select(), 100);
      }
    },
    render: (text) =>
      searchedColumn === dataIndex ? (
        <Highlighter
          highlightStyle={{
            backgroundColor: "#ffc069",
            padding: 0,
          }}
          searchWords={[searchText]}
          autoEscape
          textToHighlight={text ? text.toString() : ""}
        />
      ) : (
        text
      ),
  });

  const multipleCraftsHandler = (input) => {
    setMultipleCrafts(input.target.value);
  };

  const columns = [
    {
      title: "",
      dataIndex: "icon",
      render: (DIR) => <Icon src={DIR} alt={DIR} />,
      align: "right",
      key: "icon",
      width: "5%",
    },
    {
      title: "Item",
      dataIndex: "name",
      key: "item",
      width: "10%",
      ...getColumnSearchProps("name"),
    },
    {
      title: "Qtde",
      dataIndex: "qtde",
      align: "center",
      key: "qtde",
      width: "5%",
    },
    {
      title: "Ingredientes",
      dataIndex: "ingredients",
      width: "20%",
      render: (ingredients) =>
        ingredients.map((ingredients) => (
          <>
            <MinorIcon src={ingredients.icon} alt={ingredients.icon} />
            {ingredients.qtde} {ingredients.name}
            <br />
          </>
        )),
      key: "ingredients",
    },

    data.id === "TAILORING"
      ? {
          title: "Obtivel na DZ",
          dataIndex: "dz",
          width: "20%",
          key: "dz",
        }
      : {
          title: (
            <MultiplierInput
              type="number"
              onChange={multipleCraftsHandler}
              value={multipleCrafts}
            />
          ),
          dataIndex: "ingredients",
          width: "20%",
          render: (ingredients) =>
            ingredients.map((ingredients) => (
              <>
                <MinorIcon src={ingredients.icon} alt={ingredients.icon} />
                {ingredients.qtde * multipleCrafts} {ingredients.name}
                <br />
              </>
            )),
          key: "multiplecrafts",
        },
  ];
  return (
    <Container>
      <Table
        columns={columns}
        dataSource={dataContent}
        pagination={false}
      />
    </Container>
  );
};

export default DataTable;
