import React,{useState,useEffect} from 'react'
import {useContextCustom} from '../Context/index'
import {useNavigate,useParams} from 'react-router-dom'

function EditPage() {

    const {todos,setTodos} = useContextCustom()
    const [input,setInput] = useState('')
    let {id} = useParams()
    let navigator = useNavigate()

    useEffect(() => {
        let todo = todos.find(todo => todo.id == id)
        setInput(todo.task)
    },[])

    const handleSubmit = (e) => {
        e.preventDefault()
        let todo = todos.find(todo => todo.id == id)
        todo.task = input
        localStorage.setItem('todo',JSON.stringify(todos))
        navigator('/')
        setInput('')
    }

    return (
        <>
        <header>
        <h1>Edit - {id}</h1>
        </header>
        <form onSubmit={handleSubmit}>
        <input type="text" id="task" name="task"  value={input} onChange={e => setInput(e.target.value)} maxLength="20" placeholder="ToDo..." autoComplete='off'/>
        <button type="submit"><i className="fa-solid fa-plus"></i></button> 
        </form>
        </>
    )
}

export default EditPage