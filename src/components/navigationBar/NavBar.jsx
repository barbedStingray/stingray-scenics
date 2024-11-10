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
                    <div>Miniatures</div>
                    <div>Terrain</div>
                    <div>Store</div>
                    <div>Videos</div>
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
