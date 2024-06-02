import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { addTodo, deleteTodo, editTodo, toggleTodo } from './stores/todoSlice';

function App() {

  const dispatch = useDispatch()
  const todos = useSelector(state => state.todos)
  console.log(todos)
  const [text, setText] = useState('')
  const [editId, setEditId] = useState(null)
  const [editText, setEditText] = useState('')
  const [filterValue, setFilterValue] = useState('all')
  const [filteredList, setFilteredList] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (text.trim() !== '') {
      dispatch(
        addTodo(text)
      )
      setText('')
    }
  }

  const handleDelete = (id) => {
    dispatch(deleteTodo(id))
  }

  const handleEditStart = (id, text) => {
    setEditId(id)
    setEditText(text)
  }

  const handleEditCancel = () => {
    setEditId(null)
    setEditText('')
  }

  const handleEditSave = () => {
    if (editText.trim() !== '') {
      dispatch(editTodo({
        id: editId,
        newText: editText}
      ))
    }
    setEditId(null)
    setEditText('')
  }

  const handleFilterVlaue = (e) => {
    setFilterValue(e.target.value)
  }

  useEffect(
    () => {
      if (filterValue === 'all') {
        setFilteredList(todos)
      }else if (filterValue === 'completed') {
        setFilteredList(todos.filter(todo => todo.completed))
      }else{
        setFilteredList(todos.filter(todo => !todo.completed))
      }
    },
    [todos, filterValue]
  )
  
  console.log(filterValue)
  return (
    <div className="App">
      <h1>TODO LIST</h1>
      <select defaultValue='all' onChange={handleFilterVlaue}>
          <option value="all">전체</option>
          <option value="completed">완료</option>
          <option value="active">미완료</option>
      </select>
      <form onSubmit={handleSubmit}>
        <input value={text} onChange={e => setText(e.target.value)}/>
        <button className='btn' type='submit'>Add Todo</button>
      </form>
      <ul>
        {filteredList.map(todo => (
          <li key={todo.id}>
            {todo.id === editId ? 
            <>
            <input type='text' value={editText} onChange={(e) => setEditText(e.target.value)}/>
            <button onClick={handleEditSave}>Save</button>
            <button onClick={handleEditCancel}>Cancel</button>
            </>
            :
            <>
              <input type='checkbox' checked={todo.completed} onChange={() => dispatch(toggleTodo(todo.id))}/>
              <span>{todo.text}</span>
              <button onClick={() => handleEditStart(todo.id, todo.text)}>Edit</button>
              <button onClick={() => handleDelete(todo.id)}>Delete</button>
            </>
            }
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
