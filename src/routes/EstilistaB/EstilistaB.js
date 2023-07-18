import React from 'react'

import Header from "../../components/HeaderAntd";
import Content from "../../components/Content"
import DataTable from '../../components/DataTable';

import { StyledContainer } from './styles'

const EstilistaB = () => {
  return (
    <>
      <Header title='Estilista Rank B' />

      <Content>
        <StyledContainer>

          <DataTable/>

        </StyledContainer>
      </Content>
    </>
  )
}

export default EstilistaB;