import React from 'react'
import "./styles/Header.css"
import { Link } from "react-router-dom"
import SearchIcon from '@mui/icons-material/SavedSearch';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { useStateValue } from "./StateProvider"

function Header() {

  const [{ basket }, dispatch] = useStateValue();

  return (
    <nav className="header">
      <Link to = "/">
        <img
          className="header__logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt=''
        />
      </Link>
      
      <div className="header__search">
        <input type="text" className="header__searchInput" />
        <SearchIcon className = "header__searchIcon" />
      </div>

      <div className = "header__nav">
        <Link to = "/login" className="header__link">
          <div className='header__option'>
            <span className='header__option1'>Hello Rahul</span>
            <span className='header__option2'>Sign In</span>
          </div>
        </Link>
        
        <Link to = "/" className="header__link">
          <div className='header__option'>
            <span className='header__option1'>Returns</span>
            <span className='header__option2'>& Orders</span>
          </div>
        </Link>

        <Link to = "/" className="header__link">
          <div className='header__option'>
            <span className='header__option1'>Your</span>
            <span className='header__option2'>Prime</span>
          </div>
        </Link>

        <Link to = "/checkout" className="header__link">
          <div className='header__optionBasket'>
            <ShoppingBasketIcon />
            <span className='header__option2 header__basketCount'>{basket?.length}</span>
          </div>
        </Link>
      
      </div>
    </nav>
  )
}

export default Header