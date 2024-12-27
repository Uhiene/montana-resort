import React from 'react'
import Header from './Header'
import Footer from './Footer'

const Layout = ({children}) => {
  return (
    <div className='min-h-screen flex flex-col relative'>
        <div className='absolute top-0 left-0 w-full z-10'>
            <Header/>
        </div>

        <main className='flex-grow'>{children}</main>

        <Footer/>
    </div>
  )
}

export default Layout