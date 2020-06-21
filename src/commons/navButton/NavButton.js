import React from 'react';
import './NavButton.scss';

const NavButton = ({ buttonIcon }) => {

    return (
        <div className="nav-button">
            {buttonIcon}
        </div>
    );
};

export default NavButton;