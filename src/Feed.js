import React from 'react'
import './Feed.css'
import MessageSender from './MessageSender'
import Post from './Post'
import StoryReel from './StoryReel'

function Feed() {
    return (
      <div className="feed">
        <StoryReel />
        <MessageSender />
        <Post
          profilePic="https://avatars.githubusercontent.com/u/24712956?v=4"
          message="WOW this works"
          timestamp="This is a timestamp"
          username="Raage"
          image="https://cdn.shopify.com/s/files/1/0362/7758/4012/products/codeorg2019_social_600x.png?v=1585670914"
        />
        <Post
          profilePic="https://avatars.githubusercontent.com/u/24712956?v=4"
          message="WOW this works"
          timestamp="This is a timestamp"
          username="Raage"
          
        />
        
        {/* StoryReel */}
        {/* MessageSender */}
      </div>
    );
}

export default Feed
