import * as React from 'react';

const HeaderBanner = () => {
    return (
        <div className="wrapper">
            <h1> UpLift </h1>
            <div className="topright">
                Welcome, Jane Advisor
                <div className="dropdown">
                    <div className="dropdn">OBO</div>
                    <div className="dropdown-content">
                        <a href="#">Option 1</a>
                        <a href="#">Option 2</a>
                        <a href="#">Option 3</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeaderBanner; 
