import React from 'react'
import { Link } from '@reach/router';
import LogoImage from "@images/logo.svg"
import LogoImageMobile from "@images/logo_mobile.svg"
import './style.scss';

const Logo = () => {  
    return (
        <div class="logo">
            <Link to="/">
                ​<picture>
                    <source srcset={LogoImageMobile} media="(max-width: 768px)" type="image/svg+xml"/>
                    <img className="logo" src={LogoImage} alt="Logo da Python Brasil 2022"/>
                </picture>
            </Link>
        </div>
    )
  }
  
  export default Logo