import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Currency = () => {
  const { currency, setCurrency } = useContext(AppContext);

  const handleChangeCurrency = (e) => {
    setCurrency(e.target.value);
  };

  return (
    <div className="alert alert-warning">
      <select className="custom-select" id="inputGroupSelect01" onChange={handleChangeCurrency} value={currency}>
        <option value="">Currency</option>
        <option value="$">$ Dolar</option>
        <option value="£">£ Pound</option>
        <option value="€">€ Euro</option>
        <option value="₹">₹ Ruppe</option>
      </select>
    </div>
  );
}

export default Currency;
