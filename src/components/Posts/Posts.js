import { Avatar } from '@mui/material'
import React from 'react'
import './styles.css'

const Posts = ({ name, description , message, photoUrl }) => {
  return (
    <div className='post'>
      <div className='post_header'>
        <Avatar />
        <div className='post_info'>
            <h2>Sonny Sanga</h2>
            <p>Description</p>
        </div>
      </div>

      <div className='post_body'>
        <p>Message goes here</p>
      </div>
      <div className='post_buttons'>
        
      </div>
    </div>
  )
}

export default Posts
