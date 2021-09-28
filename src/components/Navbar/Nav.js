import React from 'react'
import './Nav.css'

function Nav() {
    return (
        <div className='navbar'>
            <div className='container'>
                <div className='logo'>
                    <img src='./Images/dds__brand-dell.svg' />
                </div>
                <p className='text'>OBIEE REPORTS</p>
                <input className='input' type='text' placeholder='Search OBIEE Reports...' />
                <button className='search'> Search</button>
                <img className='search-icon' src='./Images/dds__Search.svg' />
            </div>
            <div className='second-nav'>
                <div className='links'>
                    <a style={{textDecoration: 'none', color: 'white'}} href='#'>Home</a>
                    <a style={{textDecoration: 'none', color: 'white'}}href='#'>Dashboard</a>
                </div>
            </div>
        </div>
    )
}

export default Nav
