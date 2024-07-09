import TodoList from "./components/TodoList"
import TodoInput from "./components/TodoInput"
import { useState } from "react"


function App() {


  const [todos, setTodos] = useState([
  
      "Go to the gym",
      "Eat more fruits",
      "Pickup kids from school"
    ])

    function handleAddTodos(todo) {
      setTodos((currentTodos)=> [...currentTodos,todo])
    }

  return (
   <>
    <TodoInput handleAddTodos={handleAddTodos} todos={todos}/>
    <TodoList todos={todos

    }/>
   </>
  )
}

export default App
