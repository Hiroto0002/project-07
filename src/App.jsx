import React from 'react'
import { useState } from 'react'
import './App.css'

function App() {
  const todos = [
    { id: 1, title: 'Learn React', completed: false },
    { id: 2, title: 'Build a Todo App', completed: true },
    { id: 3, title: 'Master JavaScript', completed: false },
  ]
  const [todoList, setTodoList] = useState(todos)
  const [newTodo, setNewTodo] = useState('')

  return (
    <>
      <h1>Todo List</h1>
      <ul>
        {todoList.map((todo) => (
          <li key={todo.id}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => {
                setTodoList(
                  todoList.map((t) =>
                    t.id === todo.id ? { ...t, completed: !t.completed } : t
                  )
                )
              }}
            />
            {todo.title}
          </li>
        ))}
      </ul>

      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        placeholder="Add a new todo"
      />
      
      <button
        onClick={() => {
          if (newTodo.trim() !== '') {
            setTodoList([
              ...todoList,
              { id: Date.now(), title: newTodo, completed: false },
            ])
            setNewTodo('')
          }
        }}
      >
        Add Todo
      </button>
    </>
  )
}

export default App