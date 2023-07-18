import React from 'react';

import Header from "../../components/HeaderAntd";
import Content from "../../components/Content"
import DataTable from '../../components/DataTable';
import data from '../../data/chemical'

const Chemical = () => {
  return (
    <>
      <Header title='Chemicals' />

      <Content>
          <DataTable data={data}/>
      </Content>
    </>
  )
}

export default Chemical;