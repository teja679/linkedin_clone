import React, { useEffect, useState } from 'react'
import './styles.css'
import CreateIcon from '@mui/icons-material/Create'
import ImageIcon from '@mui/icons-material/Image'
import SubscriptionsIcon from '@mui/icons-material/Subscriptions'
import EventNoteIcon from '@mui/icons-material/EventNote'
import CalendarViewDayIcon from '@mui/icons-material/CalendarViewDay'
import InputOptions from '../../components/InputOptions'
import Post from '../../components/Post'
import { db } from '../../firebase'
const Feed = () => {
  const [posts, setPosts] = useState([]);

  function fetchPosts() {
    const docList = [];
    db.collection("posts")
      .onSnapshot((snapshot) => {
        snapshot.forEach((doc) => {
          docList.push({
            id: doc.id,
            data: doc.data()
          });
        });
        setPosts(docList);
      });
  }

  useEffect(() => {
    fetchPosts()
  }, [])

  const sendPost = e => {
    e.preventDefault()
  }
  return (
    <div className='feed'>
      <div className='feed_inputContainer'>
        <div className='feed_input'>
          <CreateIcon />
          <form>
            <input type='text' />
            <button onClick={sendPost} type='submit'>Send</button>
          </form>
        </div>
        <div className='feed_inputOptions'>
          <InputOptions title='Photo' color='#70b5f9' Icon={ImageIcon} />
          <InputOptions title='Video' color='#e7a33e' Icon={SubscriptionsIcon} />
          <InputOptions title='Event' color='#c0cbcd' Icon={EventNoteIcon} />
          <InputOptions title='Write article' color='#7fc15e' Icon={CalendarViewDayIcon} />
        </div>
      </div>

      {/* Post */}
      {posts.map((post) => (
        <Post name={post.name} description={post.description}
        message={post.message} />
      ))}
    </div>
  )
}

export default Feed
