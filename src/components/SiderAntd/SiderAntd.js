import React from "react";
import { Menu } from "antd";
import { Layout } from 'antd';
import menuItems from "../../constants/menuItems";
import { EmptyBlock } from "./styles";

const { Sider } = Layout;

const SiderAntd = (props) => {
  const {collapsed, setCollapsed} = props;
  return (
    <Sider
      collapsible
      collapsed={collapsed}
      onCollapse={(value) => setCollapsed(value)}
    >
      <EmptyBlock><img src="icons/logoPXG.png" alt="logoPXG"/></EmptyBlock>
      <Menu mode="inline" items={menuItems} />
    </Sider>
  );
};

export default SiderAntd;
