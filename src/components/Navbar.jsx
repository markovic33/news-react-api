import React from 'react'
import './navbar.css'
import { Link } from 'react-router-dom'


const Navbar = () => {
  return (
    <div className='navbar bg-dark'>
        <div className='navbar_left'>
            <Link to="/" className='navbar_right_item'>News</Link>
        </div>
        <div className="navbar_right">
            <Link to="/" className='navbar_right_item'>Home</Link>
            <Link to="/general" className='navbar_right_item'>General</Link>
            <Link to="/business" className='navbar_right_item'>Business</Link>
            <Link to="/entertainment" className='navbar_right_item'>Entertainment</Link>
            <Link to="/health" className='navbar_right_item'>Healt</Link>
            <Link to="/science" className='navbar_right_item'>Science</Link>
            <Link to="/sports" className='navbar_right_item'>Sports</Link>
            <Link to="/technology" className='navbar_right_item'>Tehnology</Link>
        </div>
    </div>
  )
}

export default Navbar