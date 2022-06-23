import React,{useEffect,useState} from 'react'
import {useContextCustom} from '../Context/index'

function Form() {

  const {todos,setTodos} = useContextCustom()  

  const handleSubmit = (e) => {
    e.preventDefault()
    const data =  {id : todos.length , time : Date.now(),checked:false, ...Object.fromEntries(new FormData(e.target))}
    setTodos([...todos,data])
  }     

  useEffect(() => {
    console.log(todos);
  },[todos])

  return (
    <form onSubmit={handleSubmit}>
    <input type="text" id="task" name="task"  maxlength="20" placeholder="ToDo..." autocomplete="off" />
    <button type="submit"><i className="fa-solid fa-plus"></i></button> 
</form>

  )
}

export default Form