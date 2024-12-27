import React from 'react'

const Hero = ({backgroundImage, title}) => {
  return (
    <div className={`bg-cover flex flex-col items-center justify-center h-[50vh] md:h-[80vh] text-white`} 
    style={{
        backgroundImage: `url('${backgroundImage}')`,
    }}>
        <h1 className='text-3xl md:text-6xl drop-shadow-lg tracking-wider'>{title}</h1>
    </div>
  )
}

export default Hero