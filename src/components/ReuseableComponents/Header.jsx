import React from 'react'

const Header = ({subtitle, title}) => {
  return (
    <div className='text-center mb-8 md:mb-16'>
        <p className='text-sky-500 text-sm font-light'>{subtitle}</p>
        <h2 className='text-gray-800 text-3xl md:text-5xl'>{title}</h2>
    </div>
  )
}

export default Header