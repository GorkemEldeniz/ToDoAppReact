import React,{useState} from 'react'
import {useNavigate} from 'react-router-dom'
import {useContextCustom} from '../Context/index'
import Empty from './Empty'
import { useAutoAnimate } from '@formkit/auto-animate/react'

function TodoList() {
    
  const {todos,setTodos} = useContextCustom()
  const [edit,setEdit] = useState('')
  const navigate = useNavigate()

  const [animate] = useAutoAnimate()

  const handleCheck = (e,todo) => {
    todo.checked = e.target.checked
    setTodos([...todos])
    localStorage.setItem('todo',JSON.stringify(todos))

  }

  const handleDelete = (todo) => {
    setTodos([...todos.filter(t => t != todo)])
    localStorage.setItem('todo',JSON.stringify(todos))
  }

  const handleEdit = ({id}) => {
    navigate(`/edit${id}`)
  }

  
  return (
    <div ref={animate}>{
    todos.length > 0 ?  
    todos.map((todo,index) => (
      <section className="todoList" key={todo.time}>
      <div className="todo">  
        <span>
        <input 
          className={`${todo.checked ? 'checked' : ''}`} 
          value={todo.task} 
          readOnly type="text"
          />
        </span>
        <div className="actions">
          <input type="checkbox" checked={todo.checked} onChange={(e) => handleCheck(e,todo)}/>
          <button className="delete-btn" onClick={() => handleDelete(todo)}>
            <i className="fa-solid fa-trash-can"></i>
          </button>
          <button className="edit-btn" onClick={() => handleEdit(todo)}>
            <i className="fa-solid fa-pen-to-square"></i>
          </button>
        </div>
      </div>
    </section>
    ))
    : <Empty/>
  }
    </div>
  )
}

export default TodoList