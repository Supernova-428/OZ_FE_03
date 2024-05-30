import { useState } from 'react';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';

function App() {

  const counter = useSelector((state) => state.counter) // store.getState()
  const todos = useSelector((state) => state.todos)
  const dispath = useDispatch() // store.dispatch(action)
const [todoValue, setTodoValue] = useState('')
const handleSubmit = (e) => {
  e.preventDefault()
  dispath({type: 'ADD_TODO', text: todoValue})
  setTodoValue('')
}

  const handleIncrement = () => {
    dispath({type: 'INCREMENT'})
  }

  const handleDecrement = () => {
    dispath({type: 'DECREMENT'})
  }

  return (
    <div className="App">
      <div>
        <ul>
          {todos.map((todo, index) => <li key={index}>{todo}</li>)}
        </ul>
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
      Clicked: {counter} times
      {' '}
      <button onClick={handleIncrement}>
        +
      </button>
      {' '}
      <button onClick={handleDecrement}>
        -
      </button>
      </div>
    </div>
  );
}

export default App;
