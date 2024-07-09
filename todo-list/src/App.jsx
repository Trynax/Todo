import TodoList from "./components/TodoList"
import TodoInput from "./components/TodoInput"
import { useState,useEffect } from "react"


function App() {


  const [todos, setTodos] = useState([
    ])
  const [todoValue, setTodoValue]= useState('')

  function persistData(newList){
    localStorage.setItem('todos',JSON.stringify({todos:newList}))
  }

    function handleAddTodos(todo) {
      setTodos((currentTodos)=> [...currentTodos,todo])
      persistData(todos)
    }

    function handleDeleteTodo(index){
      setTodos((currentTodos)=> currentTodos.filter((todo,todoIndex)=>{
        return todoIndex != index 
      }))
      persistData(todos)
    }

    function handleEditTodo(index){
      const valueTobeEdited = todos[index]
      setTodoValue(valueTobeEdited)
    }

    useEffect(()=>{
      if(!localStorage){
        return 
      }
      let localTodos = localStorage.getItem('todos')

      if(!localTodos){
        return
      }
localTodos= JSON.parse(localTodos).todos
setTodos(localTodos) 
    },[])
  return (
   <>
    <TodoInput todoValue={todoValue} setTodoValue={setTodoValue} handleAddTodos={handleAddTodos} todos={todos}/>
    <TodoList todoValue={todoValue} setTodoValue={setTodoValue} handleEditTodo={handleEditTodo} handleDeleteTodo={handleDeleteTodo} todos={todos

    }/>
   </>
  )
}

export default App
