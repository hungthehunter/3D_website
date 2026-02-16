import React from 'react'

const hoverFocusOtherPage = () => {
  return (
    <div>
        <button className='p-3 bg-green-100 hover:bg-red-500 '>hover</button>
        <br/>
        <button className='p-3 bg-slate-500 focus:bg-blue-300'>focus</button>
        <br/>
        <button className='p-3 bg-slate-600 active:bg-red-200'></button>
    </div>
  )
}

export default hoverFocusOtherPage