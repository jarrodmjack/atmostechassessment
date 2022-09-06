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

export default Home