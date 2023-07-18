import React from 'react'

import Header from "../../components/HeaderAntd";
import Content from "../../components/Content"
import DataTable from '../../components/DataTable';
import data from '../../data/tailoring.json'

const Tailoring = () => {
  return (
    <>
      <Header title='Tailoring Addons' />

      <Content>
          <DataTable data={data}/>
      </Content>
    </>
  )
}

export default Tailoring;