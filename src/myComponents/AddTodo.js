import React, { useState } from 'react'

export const AddTodo = ({addTodo}) => {
    const [title, setTitle] = useState("")
    const [desc, setDesc] = useState("")

    const myStyle = {
        "border" : "solid black",
        "border-radius" : "2%",
        "border-width" : "2%"
      }

    const submit = (e) => {
        e.preventDefault();
        if(!title || !desc){
            alert("Title or Description can not be blank")
        }
        else{
            addTodo(title, desc);
            setTitle("");
            setDesc("");
        }
    }
    return (
        <div className="container py-5 my-5" style={myStyle}>
            <h3 className='text-center'>Add a Todo</h3>
            <form onSubmit={submit}>
                <div className="form-group">
                    <label htmlFor="title"><h5>Todo Title</h5></label>
                    <input type="text" value={title} onChange={(e) => {setTitle(e.target.value)}} className="form-control bg" id="title" aria-describedby="emailHelp" />
                </div> 
                <div className="form-group">
                    <label htmlFor="desc"><h5>Todo Description</h5></label>
                    <input type="text" value={desc} onChange={(e) => {setDesc(e.target.value)}} className="form-control bg" id="desc" />
                </div>
                <button type="submit" className="mx-auto btn btn-sm btn-dark" style={{"width": "100px", "display" : "block"}}>Add Todo</button>
            </form>
        </div>
    )
}
