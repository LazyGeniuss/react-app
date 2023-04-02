import React from 'react'
import { Todoitem } from './todoItem'

export const Todos  = (props) => {
    let myStyle = {
        minHeight : "70vh",
        margin: "40px auto"
    }
  return (
    <div className="container my-3" style={myStyle}> 
        <h3 className='my-3 text-center' >Todo's List</h3>
        {props.todos.length === 0 ? "No Todos to Display" : 
        props.todos.map((todo)=>{
            return(<Todoitem todo = {todo} key={todo.sno} onDelete = {props.onDelete}/>)
        })}

    </div>
    
  )
}
