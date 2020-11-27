import React from 'react'
import { MenuItems } from './MenuItems';
import { Button } from '../Button';
import './Navbar.css'
import {  Route, Router } from 'react-router-dom';
import {  HashLink as Link } from 'react-router-hash-link';
import FirebaseContact from '../FirebaseContact';

class NavbarComponent extends React.Component {
    state = { clicked: false }

    handleClick = () => {
        this.setState({ clicked: !this.state.clicked })
    }
    render() {
        return (

            <nav className="NavbarItems "  >
                <h1 className="navbar-logo">DevApp Agency</h1>
                <div className="menu-icon" onClick={this.handleClick}>
                    <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>
                <ul className={this.state.clicked ? 'nav-menu active' :
                    'nav-menu'}>
                    {MenuItems.map((item, index) => {
                        return (

                            <li key={index}>
                                <Link className={item.cName} smooth to={item.url}>
                                    {item.title}
                                </Link>
                            </li>
                        )
                    })}


                    <Link smooth to="#contact"><Button>
                        Contact Us
                    </Button>
                    </Link>
                </ul>

            </nav>



        )
    }
}

export default NavbarComponent;
