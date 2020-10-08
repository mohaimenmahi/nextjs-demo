import React from 'react'
import Header from '../../Layout/Header'
import Layout from '../../Layout/index'
import Users from '../../components/Users'

let UsersMain = props => {
  return (
    <div>
      <Header title='Users' />
      <Layout component={<Users />} />
    </div>
  )
}

export default UsersMain
