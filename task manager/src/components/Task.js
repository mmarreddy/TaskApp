import React, { useContext, useEffect } from 'react'
import { useState } from 'react';
import Modal from './Modal';
import './task.css'
import UserContext from './UserContext';
import useInput from './useInput';

const Task = () => {
    const {user} = useContext(UserContext)
    const name = useInput('');
    const description = useInput('');
    const difficulty = useInput('');
    const [taskCounter, setTaskCounter] = useState(0);
    const [modalOpen, setModalOpen] = useState(false);
    const [taskList, setTaskList] = useState([]);

    const handleClose = () => {
      setModalOpen(false);
  };

    useEffect(() => {
      if (taskCounter > 0) {
          setModalOpen(true);
      }
  }, [taskCounter]);

  useEffect(()=>{
    if (modalOpen){
      setTimeout(()=>{
        handleClose();
      }, 3000);
    }
  })

    function handleSubmit (e) {
        e.preventDefault();
        setTaskCounter (prev => prev + 1);
        setTaskList([...taskList, {name: name.value, description:description.value, difficulty: difficulty.value} ])
    }
  
  return (
    <div className='task-container'>   
   
      <div className='form-container'>
      <h2>Add Task</h2>
      <form className="form" onSubmit={handleSubmit} style={{display: "grid", maxWidth: "auto", gap: "20px", justifyContent:"center"}}>
      
        <label htmlFor="name">Enter task name:</label>
        <input type="textbox" placeholder="task" id="name" {...name} required/>
        <label htmlFor="description">Enter task description:</label>
        <input type="textbox" placeholder="description" id="description" {...description} required/>
        <label htmlFor="difficulty">Enter the difficulty:</label>
        <input type="number" placeholder="1" min="1" max="5" id="difficulty" {...difficulty} required/>
        <button className='button' type="submit">Add Task</button>
        <Modal isOpen={modalOpen} onClose={handleClose}></Modal>
      </form>
      </div>
      <div className="list-container">
        <h2>{user ? `${user}'s To-Do List` : 'To-Do'}</h2>
        <h3>Number of tasks: {taskCounter}</h3>
        <ol type="1">
          {taskList.map((task, index) => (
            <li>{task.name}</li>
          ))}
        </ol>
      </div>
      </div>   
  )
}
export default Task
