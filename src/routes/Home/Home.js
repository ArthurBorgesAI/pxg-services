import React from "react";

import Header from "../../components/HeaderAntd";
import Content from "../../components/Content"

import { P } from "./styles";

const Home = () => {
  return (
    <>
      <Header title='Home' />

      <Content>
        <P>
          Selecione o tipo de serviço no menu à esquerda.
        </P>
        
      </Content>
    </>
  );
};
export default Home;
