import { useEffect, useState } from 'react';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios'

function App() {

  const counter = useSelector((state) => state.counter) // store.getState()
  const todos = useSelector((state) => state.todos)
  const posts = useSelector((state) => state.posts)
  const dispatch = useDispatch() // store.dispatch(action)

  useEffect(() => {
    fetchPosts()
  }, [])
  
  async function fetchPosts(){
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
    console.log('response', response)
    dispatch({type: 'FETCH_POSTS', payload: response.data})
  }

const [todoValue, setTodoValue] = useState('')
const handleSubmit = (e) => {
  e.preventDefault()
  dispatch({type: 'ADD_TODO', text: todoValue})
  setTodoValue('')
}

  const handleIncrement = () => {
    dispatch({type: 'INCREMENT'})
  }

  const handleDecrement = () => {
    dispatch({type: 'DECREMENT'})
  }

  return (
    <div className="App">
      <div>
        <ul>
          {posts.map(post => <li key={post.id}>{post.title}</li>)} 
        </ul>
      </div>
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
