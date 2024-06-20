import React, { useEffect } from 'react'
import { useState } from 'react';
import Modal from './Modal';
import './task.css'

const Task = () => {
    const [name, setName] = useState('');
    const[description, setDescription] = useState('');
    const[difficulty, setDifficulty] = useState('');
    const [taskCounter, setTaskCounter] = useState(0);
    const [modalOpen, setModalOpen] = useState(false);
    const [taskList, setTaskList] = useState([]);
    const handleClose = () => {
      setModalOpen(false);
  };

  useEffect = (() =>{
    handleClose()
  }, [])


  // useEffect(()=>{
  //   setTimeout(() => {
  //     setModalOpen(false);
  //   }, 3000);
  // }, [])

    function handleSubmit (e) {
        e.preventDefault();
        setTaskCounter (prev => prev + 1);
        setModalOpen(true)
        setTaskList([...taskList, {name: name, description:description, difficulty: difficulty} ])
    }
  
  //   useEffect(() => {
  //     setModalOpen(true)
  // }, [taskCounter]); 

  return (
    <div className='task-container'>   
   
      <div className='form-container'>
      <h2>Add Task</h2>
      <form className="form" onSubmit={handleSubmit} style={{display: "grid", maxWidth: "auto", gap: "20px", justifyContent:"center"}}>
      
        <label htmlFor="name">Enter task name:</label>
        <input type="textbox" placeholder="task" id="name" value={name} onChange={(e) => setName(e.target.value)}required/>
        <label htmlFor="description">Enter task description:</label>
        <input type="textbox" placeholder="description" id="description" value={description} onChange={(e) => setDescription(e.target.value)}required/>
        <label htmlFor="difficulty">Enter the difficulty:</label>
        <input type="number" placeholder="1" min="1" max="5" id="difficulty" value={difficulty} onChange={(e) => setDifficulty(e.target.value)}required/>
        <button className='button' type="submit">Add Task</button>
        <Modal isOpen={modalOpen} onClose={handleClose}></Modal>
      </form>
      </div>
      <div className="list-container">
        <h2>To-Do</h2>
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
