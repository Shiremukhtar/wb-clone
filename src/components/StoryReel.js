import React from 'react'
import Story from './Story'
import './StoryReel.css'
function StoryReel() {
    return (
      <div className="storyReel">
        <Story
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRwTWaA2EyEVAe22GF2E82vyETycoH3QwOASQ&usqp=CAU"
          profileSrc="https://avatars.githubusercontent.com/u/9919?s=40&v=4"
          title="Raage Diriye"
        />
        <Story
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRwTWaA2EyEVAe22GF2E82vyETycoH3QwOASQ&usqp=CAU"
          profileSrc="https://avatars.githubusercontent.com/u/9919?s=40&v=4"
          title="Aden Awis"
        />
        <Story
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRwTWaA2EyEVAe22GF2E82vyETycoH3QwOASQ&usqp=CAU"
          profileSrc="https://avatars.githubusercontent.com/u/9919?s=40&v=4"
          title="Mukhtar Shire"
        />
      </div>
    );
}

export default StoryReel
