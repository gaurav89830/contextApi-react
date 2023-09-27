import React, {useEffect, useState} from 'react'
import {TodoProvider} from './contexts'
import {TodoForm, TodoItem} from './components'
const App = () => {

  const [todos, setTodos] = useState([])

  const addTodo = (todo) => {
    setTodos((prev) => [{...todo}, ...prev])
  }

  const updateTodo = (id, newtodo) => {
    setTodos((prev) => {
      return prev.map((temp) => (temp.id === id ? newtodo : temp))
    })
  }

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  }

  const toggleComplete = (id) => {
    setTodos((prev) => prev.map((prevTodo) => prevTodo.id === id ? {...prevTodo, completed: !prevTodo.completed} : prevTodo))
  }

  // now to fetch the todos from local storage at the start
  useEffect(() => {
    const fetchedData = JSON.parse(localStorage.getItem("todos"));
    if (fetchedData && fetchedData.length > 0) {
      setTodos(fetchedData);
    }
  }, [])

  // now to update the todos whenver the todos updates
  // we can add it in above useEffect but it will then fetch also.

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos])

  return (
    <TodoProvider value={{todos, addTodo, updateTodo, deleteTodo, toggleComplete}}>
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
          <div className="mb-4">
            <TodoForm />
          </div>
          <div className="flex flex-wrap gap-y-3">
            {todos.map((temp) => (
              <div className='w-full' key={temp.id}>
                <TodoItem todo={temp} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </TodoProvider >
  )
}

export default App
