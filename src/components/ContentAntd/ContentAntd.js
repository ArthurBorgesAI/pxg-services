import React from "react";
import { Layout } from 'antd';
import {ContentStyles} from './styles';

const { Content } = Layout;
const ContentAntd = props => {
    return(
        <Content style={ContentStyles}>
            {props.children}
        </Content>
    )
}

export default ContentAntd;