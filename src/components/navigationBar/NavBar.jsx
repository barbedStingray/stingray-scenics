import React from 'react'
import { Link } from 'react-router-dom'
import './navBar.css'


const NavBar = () => {


    return (
        <div className='navigation'>

            <Link to='/' className='title'>Stingray Scenics</Link>


            <label className='hamburger-menu'>
                <input type='checkbox' />
            </label>
            <aside className='sidebar'>
                <nav>

                    <div>Miniature Gallery</div>
                    <div>Terrain Gallery</div>
                    <div>Commission</div>
                    <div>Model Restoration</div>
                    <div>The Hobby (HH)</div>
                    <div>Scenic Materials</div>
                    <div>Products</div>
                    <div>Contact</div>
                    <div>About</div>

                </nav>
            </aside>

            {/* <div className='navOptions'>
                <p>Home</p>
                <p>Models</p>
                <p>Terrain</p>
                <p>Reviews</p>
            </div> */}
        </div>
    )
}

export default NavBar
