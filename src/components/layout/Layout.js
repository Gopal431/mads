import React from 'react'
import Footer from '../footer/Footer'
import Header from '../header/Header'

function Layout({child}) {
  return (
    <div>
    <Header/>
    {child}
    <Footer/>
    </div>
  )
}

export default Layout