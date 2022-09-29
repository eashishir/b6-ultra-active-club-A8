import React from 'react';
import logo from '../../image/3682424-4788.png'
import './Header.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';




const Header = () => {
    return (
        <div>
            {/* <nav className='header'>
                <img src={logo} alt="" />
                <h1>Style In Free Style </h1>
                <div>
                    <a href="/shop">Skills</a>
                    <a href="/orders">Practice</a>
                    <a href="/inventory">Inventory</a>
                    <a href="/abut">About</a>
                </div>
            </nav> */}



            <nav className="navbar navbar-expand-lg bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand text-danger w-75 fs-1" href="#">Style in Free style</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Skills</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">About</a>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>



        </div>
    );
};

export default Header;