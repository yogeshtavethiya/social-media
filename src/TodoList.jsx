import React from 'react'

const TodoList = (props) => {
  return (
    <div key={props.id}>
        <p style={{textDecoration: props.isCompleted ? 'line-through' : 'none'}}>{props.name}</p>
        <button onClick={()=>props.handleDelete(props)}>x</button>
        <button onClick={()=>props.handleComplete(props)}>Complete</button>
        </div>
  )
}

export default TodoList