import React from 'react'
import Head from 'next/head'
import Layout from '../../Layout/index'
import Dashboard from '../../components/Dashboard'

let DashMain = props => {
  return (
    <div>
      <Head>
        <title>Dashboard</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout component={<Dashboard />} />
    </div>
  )
}

export default DashMain

