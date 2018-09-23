import React from 'react'
import { Link } from 'react-router-dom'

import svarkaLogo from '../../assets/images/svarka_logo.jpg'
import './Header.css'

const Header = () => {
  return (
    <div className='header-container' >
     <Link to='/' className='link-logo'  > <img className='logo' src={svarkaLogo} alt="logo" /> </Link>

      <div className='header-contacts' >
        <p className='header-phone'><i className='header-icon' class="fas fa-phone"/><a style={{textDecoration:'none', color:'black'}} href='tel:0667548222' > (066) 754 - 8 - 222</a></p>
        <p className='header-loc' ><a style={{textDecoration:'none', color:'black'}} href='tel:0667548222' > перевулок Радищева 6</a></p>
      </div>
    </div>
  )
}

export default Header;