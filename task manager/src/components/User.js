import React, { useContext } from 'react'
import UserContext from './UserContext';

const User = () => {
  const {user, setUser} = useContext(UserContext);
  return (
    <div>
         <form onSubmit={(e)=> {
          e.preventDefault();
          }}>
        <label  htmlFor="user">Enter your name:</label>
        <input style={{width:"75px", margin:"10px"}} type="text" placeholder="name" id="user" value={user} onChange={(e) => setUser(e.target.value)}required/>
        </form>
    </div>
  )
}

export default User;
