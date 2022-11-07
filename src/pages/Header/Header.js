import React from 'react'
import './styles.css'
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import HeaderOption from '../../components/HeaderOption/HeaderOption';
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';

function Header() {
  return (
    <div className='header'>

        <div className='header_left'>
            <img src='https://cdn-icons-png.flaticon.com/512/174/174857.png' alt='icon' />

            <div className='header_search'>
                <SearchRoundedIcon />
                <input type='text' />
            </div>
        </div>
        
        <div className='header_right'>
            <HeaderOption Icon={HomeIcon} title='Home' />
            <HeaderOption Icon={SupervisorAccountIcon} title='My Network' />
            <HeaderOption Icon={BusinessCenterIcon} title='Jobs' />
            <HeaderOption Icon={ChatIcon} title='Messaging' />
            <HeaderOption Icon={NotificationsIcon} title='Notifications' />
            <HeaderOption avatar={NotificationsIcon} title='me' />
        </div>
    </div>
  )
}

export default Header