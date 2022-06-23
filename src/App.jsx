import { useState } from 'react'
import Form from './components/Form'
import TodoList from './components/TodoList'
import Header from './components/Header'
function App() {

 
  return (
    <>
      <Header/>
      <Form />
      <TodoList/>
    </>
  )
}

export default App
