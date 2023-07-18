import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import SiderAntd from "../../components/SiderAntd";
import Footer from "../../components/Footer";

import { LayoutStyles, SpaceStyled, StyledContainer } from "./styles";
import { Layout } from "antd";

const Root = () => {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <Layout style={LayoutStyles}>
      <SiderAntd collapsed={collapsed} setCollapsed={setCollapsed} />


          <SpaceStyled direction="vertical" >
            <StyledContainer>
              <Outlet />
            </StyledContainer>

            <Footer />
          </SpaceStyled>



    </Layout>
  );
};
export default Root;
