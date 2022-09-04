import React from 'react'


const Home = ({ data }) => {
  return (
    <div>
      <h2>{data.name}</h2>
      <div>
        <span>{data.numBeds} beds - </span>
        <span>{data.numBaths} baths - </span>
        <span>{data.sqft} sqft</span>
      </div>
      <div>
        <ul className='tag-list'>
        {data.tags.map((tag, i) => {
        return <li key={i}>{tag} </li>
      })}
        </ul>
      </div>
    </div>
  )
}

/* 
	homePlanId: 1,
		name: "The Medita",
		numBeds: 4,
		numBaths: 4,
		sqft: 4300,
		tags: ['master on main', 'patio'],
		description: "The Medita is a spacious model featuring an open floor plan and spacious foyer. You’ll feel like you blend in with your surroundings when you’re at home.\n\nThe plan comes with 3 different layout options on the first floor, and an optional patio addition.",
		image: 'https://storage.googleapis.com/home_plan_images/70660mk_0.jpg',
*/

export default Home