import React from 'react'
import './adduser.css'
function Adduser() {
  return (
    <div className="addUser">
    <form>
         <input type="text" placeholder="Username" name="username"/>
         <button>Search</button>
    </form>
    <div className='user'>
        <div className="detail">
            <img src="./avatar.png" alt=""/>
        </div>
        <button>Add User</button>
    </div>
    <span>Jane Doe</span>
  </div>

  )
}

export default Adduser
