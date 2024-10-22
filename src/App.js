import { useState } from 'react';
import './App.css';
import TodoList from './TodoList';

function App() {
  
  const [todoList, setTodoList] = useState([])
  const [inputValue, setInputValue] = useState("")

  const handleChange = (e) => {
    setInputValue(e.target.value)
  }

  const handleAddTodo = () => {
    const newTodo = {
      name: inputValue,
      isCompleted: false,
      id: todoList.length === 0 ? 1 : todoList[todoList.length -1].id + 1
    }
    setTodoList([...todoList, newTodo])
    setInputValue('')
  }

  const handleDelete = (todo) => {
    setTodoList(todoList.filter((todos)=>todos.id !== todo.id))
  }
  const handleComplete = (todo) => {
    setTodoList(todoList.map((todos)=>{
      if(todos.id === todo.id){
        return {...todos, isCompleted: true}
      } else {
        return todos
      }
    }))
  }
  console.log(todoList)

  return (
    <div className="App">

      <input type='text' value={inputValue} onChange={handleChange} />
      <button onClick={()=>handleAddTodo()}>Add Todo</button>
      {todoList.map((todo)=>(
        <TodoList name={todo.name} id={todo.id} isCompleted={todo.isCompleted} handleDelete={handleDelete} handleComplete={handleComplete} />
      ))}
    </div>
  );
}

export default App;
