import React from 'react'
/*
sm
md
lg
xl
2xl
*/
const positionPage = () => {
  return (
    <div>
      <text className='sm:font-serif'>this is sm</text>
      <br/>
      <text className='md:font-mono'>this is md</text>
      <br/>
      <text className='lg:font-palanquin'>this is lg</text>
      <br/>
      <text className='xl:font-montserrat'>this is xl</text>
      <br/>
       <text className='2xl:font-bold'>this is 2xl</text>
    </div>
  )
}

export default positionPage