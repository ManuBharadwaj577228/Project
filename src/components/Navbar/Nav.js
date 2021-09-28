import React from 'react'
import './Nav.css'

function Nav() {
    return (
        <div>
            <div className='container'>
                <div className='container-two'>
                    <img className='logo' src='./Images/dds__brand-dell.svg' alt="Dell-logo" />
                    <p className='text'>OBIEE REPORTS</p>
                    <input className='inputt' type='text' placeholder='Search OBIEE Reports...' />
                   <button className='search'> Search</button>
                   <img className='search-icon' src='./Images/dds__Search.svg' alt="Search-icon" />
                    
                </div>
            </div>


            <div className='second-nav'>
                <div className='links'>
                    <a style={{ textDecoration: 'none', color: 'white' }} href='#'>Home</a>
                    <a style={{ textDecoration: 'none', color: 'white' }} href='#'>Dashboard</a>
                </div>
            </div>


            <div className="home">
                <div className="home-two">
                    <img src="./Images/dds__home.svg" alt="Home-icon" />
                    <img src="./Images/dds__chevron-right.svg" alt="chevron-right" />
                    <h6>Dashboard</h6>
                    <img src="./Images/dds__chevron-right.svg" alt="chevron-right" />
                    <h6>FlexBilling</h6>
                    <img src="./Images/dds__chevron-right.svg" alt="chevron-right" />
                    <h6>FlexBilling</h6>
                    <img src="./Images/dds__chevron-right.svg" alt="chevron-right" />
                    <h6>Entitled Count by Status</h6>
                </div>
            </div>
            <div className="select-bar">
                <select className="form-control">
                    <option>Option 1</option>
                    <option>Option 2</option>
                    <option>Option 3</option>
                    <option>Option 4</option>
                    <option disabled="">Option 5</option>
                </select>
            </div>

        </div>


    )
}

export default Nav
