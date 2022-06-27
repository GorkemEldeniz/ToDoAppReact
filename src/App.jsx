import { useState } from 'react'
import Form from './components/Form'
import TodoList from './components/TodoList'
import Header from './components/Header'
import {Routes,Route} from 'react-router-dom'
import EditPage from './pages/EditPage'
function App() {

 
  return (
    <Routes>
      <Route path='/' element={
                <>
                <Header/>
                <Form />
                <TodoList/>          
                </>
      }>
      </Route>
      <Route path='/edit:id' element={<EditPage/>}/>
    </Routes>
  )
}

export default App
