import React from 'react'
import { useState } from 'react'

const TodoInput = ({handleAddTodo}) => {
  const [text,setText]=useState("");
  const handleAdd=()=>{
    if(text){
      handleAddTodo(text);
      setText("")
    }
  }
  return (
    <div>
        <input type="text" value={text} onChange={(e)=>setText(e.target.value)} />
        <button onClick={handleAdd} >Add todo</button>
    </div>
  )
}

export default TodoInput