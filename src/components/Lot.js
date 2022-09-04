import React from 'react'

const Lot = ({ data }) => {

  const [street, city, state] = data.address.split(', ')
  // console.log(street)

  return (
    <div>
      <h2>{street}</h2>
      <p>{city}, {state}</p>
    </div>
  )
}

/* 
	lotId: 4,
		address: "123 Far Far Away St, Nowhere, NC",
		acres: 9.15,
		description: "This gigantic lot is far from any major population center - in fact, you’ll probably never meet a single person out here! If you’re looking for solitude at a bargain, this is the perfect place for you. There’s absolutely nothing around except nature.",
		image: 'https://storage.googleapis.com/plot_images/1030870481',
*/

export default Lot