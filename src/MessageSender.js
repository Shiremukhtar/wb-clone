import { Avatar } from '@mui/material'
import React, { useState } from 'react'
import './MessageSender.css'
import VideocamIcon from '@mui/icons-material/Videocam'
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary'
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon'
import { useStateValue } from "./StateProvider";
import db from "./firebase";
import { collection, getDocs, addDoc } from "firebase/firestore";


const colRef = collection(db, "posts");

function MessageSender () {
  const [{ user }, dispatch] = useStateValue();
    const [input, setInput] = useState('')
    const [imageUrl, setImageUrl] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        addDoc(colRef, {
          message: input,
          timestamp: new Date(),
          profilePic: user.photoURL,
          username: user.displayName,
          image: imageUrl


        })
        //some clever db stuff

        setInput('');
        setImageUrl('');
    }
    return (
      <div className="messageSender">
        <div className="messageSender_top">
          <Avatar src={user.photoURL}/>
          <form>
            <input 
            value={input}
            onChange={e => setInput(e.target.value)}
            className='messageSender_input' placeholder={`What's in your mind?, ${user.displayName}`} />
            <input
             value={imageUrl}
             onChange={e => setImageUrl(e.target.value)}
             placeholder="image URL (Optional)?" />
            <button onClick={handleSubmit} type="submit">
              Hidden submit
            </button>
          </form>
        </div>
        <div className="messageSender_bottom">
          <div className="messageSender_option">
            <VideocamIcon style={{ color: "red" }} />
            <h3>Live Video</h3>
          </div>

          <div className="messageSender_option">
            <PhotoLibraryIcon style={{ color: "green" }} />
            <h3>Photo/Video</h3>
          </div>

          <div className="messageSender_option">
            <InsertEmoticonIcon style={{ color: "orange" }} />
            <h3>Feeling/Activity</h3>
          </div>
        </div>
      </div>
    );
}

export default MessageSender
