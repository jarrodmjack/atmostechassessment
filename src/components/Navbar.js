import React from 'react'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'

const Navbar = () => {

  const location = useLocation()

  return (
    <div className='navbar'>
      <p><Link className={location.pathname === '/homes' && 'current-link'} to={`/homes`} >Home Plans</Link></p>
      <p><Link className={location.pathname === '/lots' && 'current-link'} to={`/lots`}>Lots</Link></p>
    </div>
  )
}

export default Navbar