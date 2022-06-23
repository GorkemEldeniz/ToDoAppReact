import React,{useState} from 'react'
import {useContextCustom} from '../Context/index'

function TodoList() {
    
  const {todos,setTodos} = useContextCustom()

  const handleCheck = (e,todo) => {
    todo.checked = e.target.checked
    setTodos([...todos])
    localStorage.setItem('todo',JSON.stringify(todos))

  }

  const handleDelete = (todo) => {
    setTodos([...todos.filter(t => t != todo)])
    localStorage.setItem('todo',JSON.stringify(todos))
  }

  const handleEdit = () => {

  }
  
  return (
    todos.length > 0 ?  
    todos.map((todo,index) => (
      <section className="todoList" id={index}>
      <div className="todo">
        <span>
          <input className={todo.checked && 'checked'} value={todo.task} readonly type="text" />
        </span>
        <div className="actions">
          <input type="checkbox" checked={todo.checked} onChange={(e) => handleCheck(e,todo)}/>
          <button className="delete-btn" onClick={() => handleDelete(todo)}>
            <i className="fa-solid fa-trash-can"></i>
          </button>
          <button className="edit-btn" onClick={handleEdit}>
            <i className="fa-solid fa-pen-to-square"></i>
          </button>
        </div>
      </div>
    </section>
    ))
    : <div>Naber</div>
  )
}

export default TodoList