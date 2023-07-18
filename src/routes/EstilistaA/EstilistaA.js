import React from 'react'

import Header from "../../components/HeaderAntd";
import Content from "../../components/Content"
import DataTable from '../../components/DataTable';

import { StyledContainer } from './styles'

const EstilistaA = () => {
  return (
    <>
      <Header title='Estilista Rank A' />

      <Content>
        <StyledContainer>

          <DataTable/>

        </StyledContainer>
      </Content>
    </>
  )
}

export default EstilistaA