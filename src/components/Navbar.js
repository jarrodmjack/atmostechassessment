import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='navbar'>
        <p><Link to={`/homes`}>Homes</Link></p>
        <p><Link to={`/lots`}>Lots</Link></p>
        {/* <a href='/lots'>Lots</a> */}
    </div>
  )
}

export default Navbar