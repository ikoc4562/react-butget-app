import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'
const Budget = () => {
  const { budget, currency } = useContext(AppContext)
  return (
    <div className="alert alert-secondary">
      <span> Budget: {currency}</span>{' '}
      <input type="number" value={budget} />

    </div>
  )
}
export default Budget
