import React from "react";

import {ContentStyled} from './styles';

const Content = props => {
    return(
        <ContentStyled>
            {props.children}
        </ContentStyled>
    )
}

export default Content;