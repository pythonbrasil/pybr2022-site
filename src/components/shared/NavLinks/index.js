import React from 'react'
import { Link } from '@reach/router';
import './style.scss';

const NavLinks = () => {
    const links = [
        { href: "/", label: "Home" },
        { href: "/cdc", label: "Código de Conduta" }  
      ]
      
    return (
        <div class="links">
            <ul>
                {links.map(({href, label}) => (
                <li className={href === window.location.pathname ? 'active' : ''}>
                    <Link to={href}>{label}</Link>
                </li>
                ))}
            </ul>
        </div>
    )
  }
  
  export default NavLinks