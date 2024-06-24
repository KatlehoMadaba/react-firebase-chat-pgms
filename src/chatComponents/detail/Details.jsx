import React from 'react'
import './details.css'
function Details() {
  return (
    <div className='detail'>
      <div className="user">
<img src="./avatar.png" alt=""/>
<h2> Jane Doe</h2>
<p>Lorem ipsum dolor sit amer</p>
      </div>
      <div className="info">
      <div className="option">
      <div className="title">
        <span>Chat Settings</span>
        <img src="./arrowUp.png" alt=""/>
      </div>
      </div>
      <div className="option">
      <div className="title">
        <span>Privacy & help</span>
        <img src="./arrowUp.png" alt=""/>
      </div>
      </div>   <div className="option">
      <div className="title">
        <span>Shared photos</span>
        <img src="./arrowDown.png" alt=""/>
      </div>
      <div className="photos">
        <div className="photoItem">
          <div className='photoDetail'>
          <img src="https://hips.hearstapps.com/hmg-prod/images/close-up-of-tulips-blooming-in-field-royalty-free-image-1584131603.jpg"/>
          <spam>photo_2024_2.png</spam>
          </div>
          <img src="./download.png" alt="" className="icon"/>
        </div>  <div className="photoItem">
          <div className='photoDetail'>
          <img src="https://hips.hearstapps.com/hmg-prod/images/close-up-of-tulips-blooming-in-field-royalty-free-image-1584131603.jpg"/>
          <spam>photo_2024_2.png</spam>
          </div>
          <img src="./download.png" alt="" className="icon"/>
        </div>
      </div>
      </div>   
      <div className="option">
      <div className="title">
        <span>Share Files</span>
        <img src="./arrowUp.png" alt=""/>
      </div>
      </div>
      <button>Block User</button>
      <button className="logout">Logout</button> 
      </div>
    </div>
  )
}

export default Details
