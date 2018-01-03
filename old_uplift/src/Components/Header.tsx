import * as React from 'react';
import HeaderBanner from './HeaderBanner';
import NavBar from './NavBar';

const Header = () => {
    return (
        <header className="navbar navbar-default navbar-fixed-top" id="nav-bar-top">
            <HeaderBanner />
            <NavBar />
        </header>
    );
};

export default Header;
