import { Avatar } from '@mui/material'
import React from 'react'
import './MessageSender.css'
import VideocamIcon from '@mui/icons-material/Videocam'
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary'
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon'

function MessageSender () {

    const handleSubmit = (e) => {
        e.preventDefault();
    }
    return (
      <div className="messageSender">
        <div className="messageSender_top">
          <Avatar />
          <form>
            <input className='messageSender_input' placeholder={`What's in your mind?`} />
            <input placeholder="image URL (Optional)?" />
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
