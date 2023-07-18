import React from 'react';

import Header from "../../components/HeaderAntd";
import Content from "../../components/Content"
import DataTable from '../../components/DataTable';
import data from '../../data/materia'

const Materia = () => {
  return (
    <>
      <Header title='Materias (boost +70)' />

      <Content>
          <DataTable data={data}/>
      </Content>
    </>
  )
}

export default Materia;