import React from 'react';

import Header from "../../components/HeaderAntd";
import Content from "../../components/ContentAntd"
import DataTable from '../../components/DataTable';
import data from '../../data/chemical'

const Chemical = () => {
  return (
    <>
      <Header title='Chemicals' />
      <DataTable data={data}/>

    </>
  )
}

export default Chemical;