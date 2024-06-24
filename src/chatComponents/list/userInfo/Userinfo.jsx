import React from 'react'
import './userInfo.css'
function Userinfo() {
  return (
      <div className='userInfo'>
        <div className="user">
        <img src="./avatar.png"alt="userImage"/>
        <h2> John Doe</h2>
      </div>
      <div className='icons'>
        <img src="./more.png" alt="image1"/>
        <img src="./video.png" alt="image2"/>
        <img src="./edit.png" alt="image3"/>
      </div>
      </div>
  )
}

export default Userinfo
