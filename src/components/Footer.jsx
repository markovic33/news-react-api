import React from 'react'

const Footer = () => {
  return (
    <div 
        className='container-fluid bg-dark text-white d-flex justify-content-center align-items-center'
        style={{ height: "50px" ,padding: "20px", gap: "30px", cursor: "pointer"}}    
    >
        <span>About</span>
        <span>Contact</span>
        <span>Support</span>
    </div>
  )
}

export default Footer