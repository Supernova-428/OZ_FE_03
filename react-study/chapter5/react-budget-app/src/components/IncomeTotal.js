import React, { useContext } from 'react'
import { AppContext } from '../contexts/AppContext'
import { formatNumberToWon } from '../utils'

const IncomeTotal = () => {

  const {incomes} = useContext(AppContext)

  const total = incomes.reduce((total, item) => {
    return (total += item.cost)
  }, 0)

  const alertType = total > 0 ? 'alert-success' : 'alert-danger'

  return (
    <div className={`alert p-4 ${alertType}`}>
      <span>총 수입: {formatNumberToWon(total)}</span>
    </div>
  )
}

export default IncomeTotal