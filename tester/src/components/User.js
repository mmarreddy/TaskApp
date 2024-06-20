import React from 'react'
import { useState } from 'react';

const User = (user, setUser) => {

  return (
    <div>
        <label htmlFor="user">Enter your name:</label>
        <input type="submit" placeholder="name" id="user" value={user} onSubmit={(e) => setUser(e.target.value)}required/>
    </div>
  )
}

export default User
