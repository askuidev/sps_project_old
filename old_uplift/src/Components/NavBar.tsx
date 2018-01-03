import * as React from 'react';
import { Link } from 'react-router-dom';

const NavBar = (props: object) => {
    return (
        <nav>
            <div className="container-fluid">
                <div className="collapse navbar-collapse" id="navbar">
                    <ul className="nav navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Overview</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/sps">SPS New</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/accountslist">Accounts List</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/">View</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/">View Target</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Modify Target</Link>
                        </li>
                    </ul>

                </div>
            </div>
        </nav>
    );
};

export default NavBar;
