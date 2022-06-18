import React from 'react'
import "./topbar.scss"
import PersonIcon from '@mui/icons-material/Person';
import MailOutlineIcon from '@mui/icons-material/MailOutline';

export default function Topbar({menuOpen, setMenuOpen}) {
  return (
    <div className={'topbar ' + (menuOpen && 'active')}> {/* add active to className if the menu is open */}
      <div className="wrapper">
        <div className="left">

          <a href="#intro" className='logo'>Logan Falzarano</a> {/* #intro is a link to the intro section */}

          <div className="itemContainer">
            <PersonIcon className='icon'/>
            <span className='span'>+1 (603)-443-2131</span>
          </div>

          <div className="itemContainer">
            <MailOutlineIcon className='icon'/>
            <span className='span'>lfalzar1@jhu.edu</span>
          </div>
        </div>
        <div className="right">
          <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
            <span className='line1'></span>
            <span className='line2'></span>
            <span className='line3'></span>
          </div>
        </div>

      </div>
    </div>
  )
}
