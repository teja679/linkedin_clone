import React from 'react'
import './styles.css'
import CreateIcon from '@mui/icons-material/Create'
import ImageIcon from '@mui/icons-material/Image'
import SubscriptionsIcon from '@mui/icons-material/Subscriptions'
import EventNoteIcon from '@mui/icons-material/EventNote'
import CalendarViewDayIcon from '@mui/icons-material/CalendarViewDay'
import InputOptions from '../../components/InputOptions/InputOptions'
import Posts from '../../components/Posts/Posts'
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
        <div className='feed_inputOptions'>
          <InputOptions title='Photo' color='#70b5f9' Icon={ImageIcon} />
          <InputOptions title='Video' color='#e7a33e' Icon={SubscriptionsIcon} />
          <InputOptions title='Event' color='#c0cbcd' Icon={EventNoteIcon} />
          <InputOptions title='Write article' color='#7fc15e' Icon={CalendarViewDayIcon} />
        </div>
      </div>

      {/* Posts */}
      <Posts name='Sonny Sangha' description='This is a test'
      message='WOW this is worked!' />
      <Posts name='Sonny Sangha' description='This is a test'
      message='WOW this is worked!' />
    </div>
  )
}

export default Feed
