import React from 'react'

import Header from "../../components/HeaderAntd";
import Content from "../../components/ContentAntd"
import DataTable from '../../components/DataTable';
import data from '../../data/tailoring.json'

const Tailoring = () => {
  return (
    <>
      <Header title='Tailoring Addons' />
      <DataTable data={data}/>
    </>
  )
}

export default Tailoring;