import React from 'react'

import Header from "../../components/HeaderAntd";
import Content from "../../components/ContentAntd"
import DataTable from '../../components/DataTable';

import data from '../../data/StylistB.json'

import { StyledContainer } from './styles'

const EstilistaB = () => {
  return (
    <>
      <Header title='Estilista Rank B' />

      <Content>
        <StyledContainer>

          <DataTable data={data}/>

        </StyledContainer>
      </Content>
    </>
  )
}

export default EstilistaB;