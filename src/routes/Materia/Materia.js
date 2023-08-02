import React from 'react';

import Header from "../../components/HeaderAntd";
import DataTable from '../../components/DataTable';
import data from '../../data/materia'

const Materia = () => {
  return (
    <>
      <Header title='Materias (boost +70)' />
      <DataTable data={data}/>
    </>
  )
}

export default Materia;