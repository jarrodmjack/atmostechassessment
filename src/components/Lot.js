import React from 'react'

const Lot = ({ data }) => {

  const [street, city, state] = data.address.split(', ')

  return (
    <div>
      <h2>{street}</h2>
      <p>{city}, {state}</p>
    </div>
  )
}


export default Lot