// import logo from './logo.svg';
import './App.css';
import { About } from './myComponents/About';
import {Footer} from './myComponents/footer';
import {AddTodo} from './myComponents/AddTodo';
import {Todos} from './myComponents/todos';
import Header from './myComponents/header';
import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  let initTodo;
  if(localStorage.getItem("todos")===null){
    initTodo = []
  }
  else{
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }
  const onDelete = (todo) => {
    console.log("Task has been deleted on todo ", todo)
    // this will work in angular but not in react, we have to use 'useState' hook for that.
    // let index = todos.indexOf(todo)
    // todos.splice(index, 1)

    setTodos(todos.filter((e)=>{
      return e!==todo;
    }))
    localStorage.setItem("todos",JSON.stringify(todos))
  }

  const addTodo = (title, desc) => {
      console.log("I am adding todo ", title, desc);
      let sno;
      if(todos.length===0){
        sno = 0
      }
      else{
        sno = todos[todos.length-1].sno + 1;
      }
      const myTodo = {
        sno : sno,
        title: title,
        description: desc
      }
      setTodos([...todos, myTodo]);
      console.log(myTodo)
  }

  const [todos, setTodos] = useState(initTodo);

  useEffect(() => {
    localStorage.setItem("todos",JSON.stringify(todos))
  }, [todos])

  return (
    <div className = "bg">
      <Router>
        <Header title = "MyTodosList" />

        <Routes>
          <Route path="/" element={<div className='row'>
            <div className=" mx-5 col-4">
                <AddTodo addTodo={addTodo}/>
            </div>
            <div className="col-6 align-top">
                <Todos todos = {todos} onDelete = {onDelete}/>  
            </div>
            </div>}>
          </Route>
          <Route path="/about" element={<About/>}>
          </Route>
        </Routes>

        <Footer/>
      </Router>
    </div>    
  );
}

export default App;
