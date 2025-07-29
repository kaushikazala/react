import React from 'react'
import { Route, Routes } from 'react-router'
import Home from './components/Home'
import TodoList from './components/TodoList'

const App = () => {
  return (
    <>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/todolist' element={<TodoList/>}/>
     </Routes>
    </>
  )
}

export default App
