import React from 'react'

import Header from "../../components/HeaderAntd";
import Content from "../../components/ContentAntd"
import DataTable from '../../components/DataTable';

import data from '../../data/StylistA.json'

import { StyledContainer } from './styles'

const EstilistaA = () => {
  return (
    <>
      <Header title='Estilista Rank A' />

      <Content>
        <StyledContainer>

        <DataTable data={data}/>

        </StyledContainer>
      </Content>
    </>
  )
}

export default EstilistaA