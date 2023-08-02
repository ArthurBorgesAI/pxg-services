import React from 'react'

import Header from "../../components/HeaderAntd";
import Content from "../../components/ContentAntd"
import DataTable from '../../components/DataTable';

import data from '../../data/StylistS.json'

import { StyledContainer } from './styles'

const EstilistaS = () => {
  return (
    <>
      <Header title='Estilista Rank S' />

      <Content>
        <StyledContainer>

        <DataTable data={data}/>

        </StyledContainer>
      </Content>
    </>
  )
}

export default EstilistaS;