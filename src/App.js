import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0)

  const handleCount = (action)=>{
    switch(action){
      case 'inc':
        setCount(prevCount=>prevCount+1);
        break;
      case 'dec':
        setCount(prevCount=>prevCount-1);
        break;
      case'reset':
        setCount(0);
        break;
      default:
        console.error('Invalid action');
        break;
    }
  }
  return (
    <div className="App">
      <h1>{count}</h1> 
      <button onClick={()=>handleCount('inc')}>Increment</button>
      <button onClick={()=>handleCount('dec')}>Decrement</button>
      <button onClick={()=>handleCount('reset')}>Reset</button>
    </div>
  );
}

export default App;
