import React from 'react'
import Header from '../../Layout/Header'
import Layout from '../../Layout/index'
import Order from '../../components/Order'

let OrderMain = props => {
  return (
    <div>
      <Header title='Orders' />
      <Layout component={<Order />} />
    </div>
  )
}

export default OrderMain

