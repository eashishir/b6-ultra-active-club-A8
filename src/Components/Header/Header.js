import React from 'react';
import logo from '../../image/3682424-4788.png'
import './Header.css'


const Header = () => {
    return (
        <div>
            <nav className='header'>
                <img src={logo} alt="" />
                <h1>Style In Free Style </h1>
                <div>
                    <a href="/shop">Skills</a>
                    <a href="/orders">Practice</a>
                    <a href="/inventory">Inventory</a>
                    <a href="/abut">About</a>
                </div>
            </nav>
        </div>
    );
};

export default Header;