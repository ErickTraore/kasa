import React from 'react';
import { NavLink } from 'react-router-dom';



const NavBar = () => {
    return (
        <div className='layout__navbar'>
            <div className='layout__navbar__one'>
                <NavLink style={{textDecoration: 'none'}} to="/" >Accueil</NavLink>
            </div>
            <div className='layout__navbar__two'>
                <NavLink style={{textDecoration: 'none'}} to="/Apropos" >A Propos</NavLink>
            </div>
       </div>
    );
};

export default NavBar;