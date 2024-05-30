import { useState } from 'react';
import './App.css';

function App({value, onIncrement, onDecrement}) {
console.log(value)
const [todoValue, setTodoValue] = useState('')
const handleSubmit = (e) => {
  e.preventDefault()
}
  return (
    <div className="App">
      <div>
        <ul></ul>
        <form onSubmit={handleSubmit}>
          <input
            type='text'
            value={todoValue}
            onChange={(e) => setTodoValue(e.target.value)}
          />
          <input type='submit'/>
        </form>
      </div>
      <div>
      Clicked: {value.counter} times
      {' '}
      <button onClick={onIncrement}>
        +
      </button>
      {' '}
      <button onClick={onDecrement}>
        -
      </button>
      </div>
    </div>
  );
}

export default App;
