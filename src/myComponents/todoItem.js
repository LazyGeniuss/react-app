import React from 'react'

export const Todoitem = ({todo, onDelete}) => {
    const myStyle = {
      "border" : "solid black",
      "border-radius" : "2%",
      "border-width" : "2%"
    }
  return (
    <>
    <div className='py-3 px-3' style={myStyle}>
      <h4>{todo.title}</h4>
      <p>{todo.description}</p>
      <button className='btn btn-sm btn-danger' onClick={()=>{onDelete(todo)}}>Done</button>
    </div>
    <hr/>
    </>
 )
}
