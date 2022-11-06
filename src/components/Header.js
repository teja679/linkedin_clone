import React from 'react'
import './styles.css'
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';

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
            
        </div>
    </div>
  )
}

export default Header