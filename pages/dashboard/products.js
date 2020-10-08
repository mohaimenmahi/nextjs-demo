import React from 'react'
import Header from '../../Layout/Header'
import Layout from '../../Layout/index'
import Products from '../../components/Products'

let ProductMain = props => {
  return (
    <div>
      <Header title='Products' />
      <Layout component={<Products />} />
    </div>
  )
}

export default ProductMain
