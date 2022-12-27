import React from 'react';
import Story from './Story';
import "./StoryReel.css";

export default function StoryReel() {
  return (
    <div className="storyReel">

        {/* Story */}
        <Story
            image="https://images.unsplash.com/photo-1585189729593-ab5086ab2369?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Zmxvd2VycyUyMGFlc3RoZXRpY3xlbnwwfHwwfHw%3D&w=1000&q=80"
            profileSrc="https://yaay.today/__export/1609006877991/sites/yaay/img/2020/12/26/9e51466c0f910448dfb23c4e85eb95fe.jpg_462530703.jpg"
            title="Asya"
        />

        {/* Story */}
        <Story
            image="https://w0.peakpx.com/wallpaper/894/28/HD-wallpaper-aestyetic-flower-aesthetic-sky-moon.jpg"
            profileSrc="https://www.inkatrinaskitchen.com/wp-content/uploads/2011/04/Cookie-Monster-Cookies.jpg"
            title="Cookie Monster"
        />

        {/* Story */}
        <Story
            image="https://i.pinimg.com/originals/e8/10/78/e810789e064e7d9d88b12a3ba996387c.jpg"
            profileSrc="https://www.clipartmax.com/png/middle/132-1327472_drawn-sunlight-cute-cartoon-cute-platypus-drawing.png"
            title="Blurb"
        />

        {/* Story */}
        <Story
            image="https://wallpaperaccess.com/full/2443819.jpg"
            profileSrc="https://static.vecteezy.com/system/resources/previews/003/596/692/original/cute-santa-claus-with-christmas-card-merry-christmas-design-vector.jpg"
            title="elf yourself"
        />

    </div>
  )
}
