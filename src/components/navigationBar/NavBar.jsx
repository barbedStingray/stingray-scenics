import React from 'react'
import './navBar.css'


const NavBar = () => {


    return (
        <div className='navigation'>
            
            <h1 className='title'>Stingray Scenics</h1>


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
