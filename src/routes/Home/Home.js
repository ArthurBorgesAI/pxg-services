import React from "react";
import { Space } from "antd";

import Header from "../../components/HeaderAntd";
import Content from "../../components/ContentAntd";

import { P, Img } from "./styles";

const Home = () => {

  const merchantSound = new Audio('audio_file.mp3');
  return (
    <>
      <Header title="Home" />

      <Content>
        <Space direction="vertical" align="center">
          <P>Selecione o tipo de serviço no menu à esquerda.</P>
          <Img src="icons/MerchantNW.png" alt="Merchant" />
        </Space>
      </Content>
    </>
  );
};
export default Home;
