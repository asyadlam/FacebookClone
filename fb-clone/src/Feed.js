import React from 'react'
import "./Feed.css";
import StoryReel from "./StoryReel";
import MessageSender from './MessageSender';
import Post from "./Post";

function Feed() {
  return (
    <div className="feed">

        {/* StoryReel */}
        <StoryReel />

        {/* MessageSender */}
        <MessageSender />

        {/* Posts */}
        <Post 
            profilePic="https://images.pexels.com/photos/1704488/pexels-photo-1704488.jpeg?cs=srgb&dl=pexels-suliman-sallehi-1704488.jpg&fm=jpg"
            message="Does this work?"
            timestamp="This is a timestamp"
            username="jacksonRocky"
            image="https://wallpaperaccess.com/full/1269293.png"
        />
        <Post 
            profilePic="https://i.pinimg.com/474x/97/aa/84/97aa847d061a14894178805f1d551500.jpg"
            message="I think it does"
            timestamp="This is another timestamp"
            username="roundino"
            image="https://static.wixstatic.com/media/bdf7db_028b4401296341b28c8bd3531002d86b~mv2.jpg/v1/fill/w_640,h_500,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/bdf7db_028b4401296341b28c8bd3531002d86b~mv2.jpg"
        />

    </div>
  )
}

export default Feed
