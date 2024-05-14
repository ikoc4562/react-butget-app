import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { MdDelete } from "react-icons/md";

const ExpenseItem = (props) => {
  const { dispatch, currency } = useContext(AppContext)

  const handleDeleteExpense = () => {
    dispatch({
      type: 'DELETE_EXPENSE',
      payload: props.id,
    })
  }

  const increaseAllocation = (name) => {
    const expense = {
      name: name,
      cost: 10,
    }

    dispatch({
      type: 'ADD_EXPENSE',
      payload: expense,
    })
  }

  return (
    <tr>
      <td>{props.name}</td>
      <td>{currency}{props.cost}</td>
      <td>
        <button onClick={(event) => increaseAllocation(props.name)}>+</button>
      </td>
      <td>
        <MdDelete size="1.5em" onClick={handleDeleteExpense}></MdDelete>
      </td>
    </tr>
  )
}

export default ExpenseItem
