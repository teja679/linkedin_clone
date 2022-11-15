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
import { addDoc, collection, doc, getDocs } from 'firebase/firestore'
import { FirebaseError } from 'firebase/app'
const Feed = () => {
  const [posts, setPosts] = useState([]);
  const [input, setInput] = useState('')
  const userCollectionRef = collection(db, 'posts')
  useEffect(() => {
    const getPosts = async () => {
      const postData = await getDocs(userCollectionRef)

      setPosts(postData.docs.map((doc) => ({
       ...doc.data(), id: doc.id,
      })))
      // console.log(posts)
    }
    getPosts()
  }, [])

  const sendPost = async (e) => {
    e.preventDefault()
    await addDoc(userCollectionRef, {
      name: 'Teja',
      message: input,
      description: 'this is test',
      photoUrl : '',
      // timestamp: firebase.firestore.FindValue.serverTimestamp()
    })
    setInput('')
  }
  console.log(posts)
  return (
    <div className='feed'>
      <div className='feed_inputContainer'>
        <div className='feed_input'>
          <CreateIcon />
          <form>
            <input value={input} onChange={e => setInput(e.target.value)} />
            <button type='submit' onClick={sendPost}>Send</button>
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
      {posts.map(( {name, message, description, photoUrl}) => (
        <Post key={name} name={name} description={description}
        message={message} photoUrl={photoUrl} />
      ))}
    </div>
  )
}

export default Feed
