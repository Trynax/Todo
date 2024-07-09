import React from 'react'

export default function TodoList() {

  let todos = [
    "Go to the gym",
    "Eat more fruits",
    "Pickup kids from school"
  ] 
  return (
    <ul className='maim'>
      {todos.map((todo,todoIndex)=>{
        return(
        <li className='' key={todoIndex}>{todo}</li>
        )
      })}
    </ul>
  )
}
