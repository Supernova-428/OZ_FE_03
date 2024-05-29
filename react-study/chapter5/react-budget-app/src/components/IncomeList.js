import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../contexts/AppContext'
import IncomeItem from './IncomeItem'

const IncomeList = () => {

  const {incomes} = useContext(AppContext)
  console.log(incomes)

  useEffect(() => {
    setFilteredIncomes(incomes)
  }, [incomes])
  

  const [filteredIncomes, setFilteredIncomes] = useState(incomes || [])

  const handleChange = (e) => {
    const searchResults = incomes.filter((income) => income.name.toLowerCase().includes(e.target.value))
    setFilteredIncomes(searchResults)
  }

  return (
    <>
    <input type='text' className='form-control' placeholder='검색하기...' onChange={handleChange}/>
    <ul className='list-group mt-3 mb-3'>
      {filteredIncomes.map((income) => (
        <IncomeItem key={income.id} id={income.id} name={income.name} cost={income.cost} />
      ))}
    </ul>
    </> 
  )
}

export default IncomeList