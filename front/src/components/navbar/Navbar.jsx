import React from 'react'
import './navbar.scss';
import SearchIcon from '@mui/icons-material/Search';
import Badge from '@mui/material/Badge';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

const Navbar = () => {
  return (
    <div className="Container">
        <div className="Wrapper">
            <div className="Left">
              <span className="Language">
                EN
              </span>
              <div className="SearchContainer">
                <input type="text" />
                <SearchIcon className='SearchIcon'/>
              </div>
            </div>
            <div className="Center">
              <h1>MAG!</h1>
            </div>
            <div className="Right">
              <div className="MenuItem">Register</div>
              <div className="MenuItem">Sign In</div>
              <div className="MenuItem">
                <Badge badgeContent={4} color="primary">
                  <ShoppingCartOutlinedIcon/>
                </Badge>
              </div>

            </div>
        </div>
    </div>
  )
}

export default Navbar