import React from 'react';
import './SideNav.scss';
import NavButton from '../../commons/navButton/NavButton';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; 
import { faCog, faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import { faComments as faCommentsRegular, faUser as faUserRegular } from '@fortawesome/free-regular-svg-icons'

const SideNav = () => {

    return (
      <>
        <section className="sideNav-container">
          <div className="logo">
            <img src={require("../../assets/images/logo_outline.png")} alt="logo" />
          </div>
          <div className="nav-options">
            <NavButton buttonIcon={<FontAwesomeIcon icon={faCommentsRegular} size='3x' />} />
            <NavButton buttonIcon={<FontAwesomeIcon icon={faUserRegular} size='3x' />} />
            <NavButton buttonIcon={<FontAwesomeIcon icon={faCog} size='3x' />} />
            </div>
          <div className="log-out">
            <NavButton buttonIcon={<FontAwesomeIcon icon={faSignOutAlt} size='3x' />} />
          </div>
        </section>
      </>
    );
};

export default SideNav;