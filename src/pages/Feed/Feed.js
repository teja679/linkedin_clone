import React from 'react'
import './styles.css'
import CreateIcon from '@mui/icons-material/Create'
const Feed = () => {
  return (
    <div className='feed'>
      <div className='feed_inputContainer'>
        <div className='feed_input'>
          <CreateIcon />
          <form>
            <input type='text' />
            <button type='submit'>Send</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Feed
