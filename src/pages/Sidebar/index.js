import { Avatar } from '@mui/material'
import React from 'react'
import './styles.css'

const Sidebar = () => {

    const recentItem = (topic) => (
        <div className='sidebar_recentItem'>
            <span className='sidebar_hash'>#</span>
            <p>{}{topic}</p>
        </div>
    )
  return (
    <div className='sidebar'>
      <div className='sidebar_top'>
        <img src='https://images.unsplash.com/photo-1458682625221-3a45f8a844c7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGNvbG9yJTIwcmFkaWFudHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60' alt='icon' />
        <Avatar className='sidebar_avatar' />
        <h2>Yerni Teja</h2>
        <h4>tejaabp@gmail.com</h4>
      </div>
      <div className='sidebar_stats'>
        <div className='sidebar_stat'>
            <p>Who viewed you</p>
            <p className='sidebar_statNumber'>2,543</p>
        </div>
        <div className='sidebar_stat'>
            <p>Views on post</p>
            <p className='sidebar_statNumber'>2,443</p>
        </div>
      </div>
      <div className='sidebar_bottom'>
        <p>Recent</p>
        {recentItem('reactJs')}
        {recentItem('programming')}
        {recentItem('softwareengineering')}
        {recentItem('design')}
        {recentItem('developer')}
      </div>
    </div>
  )
}

export default Sidebar
