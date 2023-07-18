import React from "react";
import { Layout } from 'antd';
import { HeaderStyles, Title } from "./styles";

const { Header } = Layout;

const HeaderAntd = (props) => {
    const { title } = props;
    return(
        <Header style={HeaderStyles}>
            <Title>{title}</Title>
        </Header>
    )
};

export default HeaderAntd;