import React from 'react'

const Modal = ({ isOpen, onClose}) => {
if(!isOpen) return null;
  return (
      <div
            style={{
                position: "fixed",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                background: "rgba(0, 0, 0, 0.5)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
            }}
        >
            <div
                style={{
                    background: "white",
                    height: 150,
                    width: 240,
                    margin: "auto",
                    padding: "2%",
                    border: "2px solid #9d9cf1",
                    borderRadius: "10px",
                    boxShadow: "1px solid #9d9cf1",
                    fontSize: "15px",
                    color: "#44369e",
                    textAlign: "center",
                    justifyContent: "center",
                }}
            >
                <h1>Task has been added!</h1>
                <button className="closeButton" onClick={onClose}>
                    Close
                 </button>
            </div>
        </div>
  )
}

export default Modal;
