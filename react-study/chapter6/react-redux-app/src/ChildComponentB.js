import React from 'react'

const ChildComponentB = ({inputValue, setInputValue}) => {
  return (
    <div>
        <button onClick={() => setInputValue('B')}>
        ChildComponentB
        </button>
        <br/>
        {inputValue}
    </div>
  )
}

export default ChildComponentB