import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
const Currency = () => {
    const { dispatch } = useContext(AppContext);
    const [newCurrency, setNewCurrency] = useState('');
    const handleCurrencyChange = (event) => {
        let pendingCurrency = event.target.value;
        setNewCurrency(pendingCurrency);

        dispatch({
            type: 'CHG_CURRENCY',
            payload: pendingCurrency,
        });

    }

    return (
        <div className='col-sm'>
            <select className="form-control bg-success" id="inputCurrency" onChange={(event) => handleCurrencyChange(event.target.value)}>
            <option defaultValue>Currency ({newCurrency})</option>
                <option value="dollar" name="dollar">$ Dollar</option>
                <option value="pound" name="pound">£ Pound</option>
                <option value="euro" name="euro">€ Euro</option>
                <option value="ruppee" name="ruppee">₹ Ruppee</option>
            </select>
        </div>
    );
};
export default Currency;