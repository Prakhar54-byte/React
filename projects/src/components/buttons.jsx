import React from 'react'

function Buttons({name}) {

  return (
    <>
    <div className='bg-{name}-400 text-blue p-4 rounded-xl '>{name}</div></>
  )
}

export default Buttons