import logo from './logo.svg';
import './App.css';
import {useState} from 'react'
import ChildComponentA from './ChildComponentA';

function App() {

  const [inputValue, setInputValue] = useState('A')

  return (
    <div className="App">
      App Component<br/>
      {inputValue}
      <ChildComponentA inputValue={inputValue} setInputValue={setInputValue}/>
    </div>
  );
}

export default App;
