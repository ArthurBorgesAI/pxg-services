import styled from "styled-components";
import { Space } from "antd";

export const LayoutStyles = {
    'minHeight': '100vh',
}

export const StyledContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
`;

export const SpaceStyled = styled(Space)`
    width: 100%;
    .ant-space-item{
        width: 100%;
    }
`;
