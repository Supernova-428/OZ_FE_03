import React from 'react'
import ChildComponentB from './ChildComponentB'

const ChildComponentA = ({inputValue, setInputValue}) => {
  return (
    <div>ChildComponentA
        <br/>
        {inputValue}
        <ChildComponentB inputValue={inputValue} setInputValue={setInputValue}/>
    </div>
  )
}

export default ChildComponentA