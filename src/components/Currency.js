import React, { useContext} from 'react';
import { AppContext } from '../context/AppContext';
const Currency = () => {
    const { dispatch, currencyDisplay } = useContext(AppContext);
    //const [newCurrency, setNewCurrency] = useState('');
    const handleCurrencyChange = (event) => {
        let pendingCurrency = event.target.value;
       
        dispatch({
            type: 'CHG_CURRENCY',
            payload: pendingCurrency,
        });

    }

    return (
        <div className='alert alert-success'>
            <label htmlFor="currencySelect">Currency ({currencyDisplay})</label>
            <select className="form-control bg-success" id="inputCurrency" onChange={handleCurrencyChange}>
                
                <option value="$" name="dollar">$ Dollar</option>
                <option value="£" name="pound">£ Pound</option>
                <option value="€" name="euro">€ Euro</option>
                <option value="₹" name="ruppee">₹ Ruppee</option>
            </select>
            
        </div>
    );
};
export default Currency;