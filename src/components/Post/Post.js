import { Avatar } from '@mui/material'
import React from 'react'
import InputOptions from '../InputOptions/InputOptions'
import './styles.css'
import ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined'
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined'
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined'
import SendOutlinedIcon from '@mui/icons-material/SendOutlined'

const Post = ({ name, description , message, photoUrl }) => {
  return (
    <div className='post'>
      <div className='post_header'>
        <Avatar />
        <div className='post_info'>
            <h2>{name}</h2>
            <p>{description}</p>
        </div>
      </div>

      <div className='post_body'>
        <p>{message}</p>
      </div>
      <div className='post_buttons'>
        <InputOptions Icon={ThumbUpAltOutlinedIcon} 
        color='gray' title='Like' />
          <InputOptions Icon={ChatOutlinedIcon} 
        color='gray' title='Comment' />
          <InputOptions Icon={ShareOutlinedIcon} 
        color='gray' title='Share' />
          <InputOptions Icon={SendOutlinedIcon} 
        color='gray' title='Send' />
      </div>
    </div>
  )
}

export default Post
