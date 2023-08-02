import React from "react";
import { Layout } from 'antd';
import {FooterStyles} from "./styles";

const { Footer } = Layout;
const FooterAntd = () => {
    return(
        <Footer style={FooterStyles}>Desenvolvido por ArthurB.</Footer>
    )
};

export default FooterAntd;
