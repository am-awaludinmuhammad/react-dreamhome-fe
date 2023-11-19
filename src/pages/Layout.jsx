import React from 'react'
import NavigationBar from '../components/NavigationBar'
import Footer from '../components/Footer'

const Layout = ({ children }) => {
  return (
    <>
      <NavigationBar />
        <main>
          {children}
        </main>
      <Footer />
    </>
  )
}

export default Layout
