import { useEffect, useState } from "react"
import "./style.css"
import { NewTodoForm } from "./NewTodoForm"
import { TodoList } from "./TodoList"

export default function App() {
  
  const [todo, setTodo] = useState(() => {
    const localvalue = localStorage.getItem("todos")
    if(localvalue == null) return []

    return JSON.parse(localvalue)
  })
  
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todo))
  }, [todo])

  function addTodo(title) {
       setTodo((currentTodo) =>{
        return [...currentTodo,
          {id: crypto.randomUUID(), title, completed: false}, 
        ]
      })
      

  }

  function toggleTodo(id, completed){
    setTodo(currentTodo => {
      return currentTodo.map(todo =>{
        if(todo.id === id){
          return {...todo, completed }
        }
        return todo
      })
    })
  }

  function deleteTodo(id){
    setTodo(currentTodo => {
      return currentTodo.filter(todo => todo.id !== id)
    })
  }

  return (
  <>
    <NewTodoForm onSubmit = {addTodo} />
   <h1 className="header">Todo List</h1>
   <TodoList todo={todo} toggleTodo={toggleTodo} deleteTodo={deleteTodo}/>
  </>
  )
}