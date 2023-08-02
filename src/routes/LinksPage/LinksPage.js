import React from "react";
import { Space, Button, Divider } from "antd";

import Header from "../../components/HeaderAntd";
import Content from "../../components/ContentAntd"

import { P } from "./styles";

const LinksPage = () => {
  return (
    <>
      <Header title='Links' />

      <Content style={ {'alignItens': 'center'}}>
        <P>
          Links:
        </P>

        <Space.Compact direction="vertical" size="large">
          <Button type="link" href="https://www.pokexgames.com/" rel="no-referrer" target="_blank">Site Oficial</Button>
          <Button type="link" href="https://wiki.pokexgames.com/" rel="no-referrer" target="_blank">Wiki PXG</Button>
          <Button type="link" href="https://forum.pokexgames.com/" rel="no-referrer" target="_blank">Forum PXG</Button>
          <Button type="link" href="https://github.com/ArthurBorgesAI" rel="no-referrer" target="_blank">Meu GitHub</Button>
        </Space.Compact>
      </Content>
    </>
  );
};
export default LinksPage;
