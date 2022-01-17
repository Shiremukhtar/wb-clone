import React, { useState, useEffect } from 'react'
import './Feed.css'
import MessageSender from './MessageSender'
import Post from './Post'
import StoryReel from './StoryReel'
import { useStateValue } from "./StateProvider";
import db from './firebase'
import { collection, getDocs, orderBy, query } from "firebase/firestore";

const colRef = collection(db, 'posts');
// const q = query(colRef).orderBy('posts', 'desc');


function Feed() {

  const [{ user }, dispatch] = useStateValue();
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getDocs(colRef).then((snapshot => (
      setPosts(snapshot.docs.map(doc => ({ id:doc.id, data: doc.data()})))
    )))
  }, [posts])


    return (
      <div className="feed">
        <StoryReel />
        <MessageSender />

        {posts.map((post) => (
          <Post
           key={post.id}
           profilePic={post.data.profilePic}
           message={post.data.message}
           timestamp={post.data.timestamp}
           username={post.data.username}
           image={post.data.image} />
        ))}
        {/* <Post
          profilePic="https://avatars.githubusercontent.com/u/24712956?v=4"
          message="WOW this works"
          timestamp="This is a timestamp"
          username='mkshire'
          image="https://cdn.shopify.com/s/files/1/0362/7758/4012/products/codeorg2019_social_600x.png?v=1585670914"
        />
        <Post
          profilePic="https://avatars.githubusercontent.com/u/24712956?v=4"
          message="WOW this works"
          timestamp="This is a timestamp"
          username={user.displayName}
        /> */}

        {/* StoryReel */}
        {/* MessageSender */}
      </div>
    );
}

export default Feed
