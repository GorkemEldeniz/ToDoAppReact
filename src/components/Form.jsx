import React,{useEffect,useState} from 'react'
import {useContextCustom} from '../Context/index'

function Form() {

  const {todos,setTodos} = useContextCustom()  
  const [input,setInput] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    const data =  {id : todos.length , time : Date.now(),checked:false, task : input , edit:false}
    setTodos([...todos,data])
    setInput('')
  }     


  return (
    <form onSubmit={handleSubmit}>
    <input type="text" id="task" name="task"  value={input} onChange={e => setInput(e.target.value)} maxLength="20" placeholder="ToDo..." autoComplete='off'/>
    <button type="submit"><i className="fa-solid fa-plus"></i></button> 
    </form>
  )
}

export default Form