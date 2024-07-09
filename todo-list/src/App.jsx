import TodoList from "./components/TodoList"
import TodoInput from "./components/TodoInput"
import { useState } from "react"


function App() {


  const [todos, setTodos] = useState([
    ])

    function handleAddTodos(todo) {
      setTodos((currentTodos)=> [...currentTodos,todo])
    }

    function handleDeleteTodo(index){
      setTodos((currentTodos)=> currentTodos.filter((todo,todoIndex)=>{
        return todoIndex != index 
      }))
    }

  return (
   <>
    <TodoInput handleAddTodos={handleAddTodos} todos={todos}/>
    <TodoList handleDeleteTodo={handleDeleteTodo} todos={todos

    }/>
   </>
  )
}

export default App
