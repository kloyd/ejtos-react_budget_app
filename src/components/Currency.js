import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
const Currency = () => {
    const { currency } = useContext(AppContext);
    const [newCurrency, setNewCurrency] = useState('');
    
    return (
        <div className='col-sm' >
            <select className="form-control" id="inputCurrency" onChange={(event) => setNewCurrency(event.target.value)}>
            <option defaultValue>Currency ({currency})</option>
                <option value="dollar" name="dollar">$ Dollar</option>
                <option value="pound" name="pound">£ Pound</option>
                <option value="euro" name="euro">€ Euro</option>
                <option value="ruppee" name="ruppee">₹ Ruppee</option>
            </select>
        </div>
    );
};
export default Currency;