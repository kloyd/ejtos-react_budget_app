import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { dispatch, budget, expenses, currency } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);
    const handleBudgetChange = (event) => {
        let pendingBudget = event.target.value;
        const totalExpenses = expenses.reduce((total, item) => {
            return (total = total + item.cost);
        }, 0);

        if (pendingBudget > 20000) {
            alert("Budget cannot exceed 20000");
            setNewBudget(budget);
            return;
        }

        if (pendingBudget < totalExpenses) {
            alert("Budget cannot be less than allocations.");
            setNewBudget(budget);
            return;
        }
        
        setNewBudget(pendingBudget);
        dispatch({
            type: 'SET_BUDGET',
            payload: pendingBudget,
        });
    };
    
    return (
<div className='alert alert-secondary'>
<span>Budget: {currency}</span>
<input type="number" step="10" value={newBudget} onChange={handleBudgetChange}></input>
</div>
    );
};
export default Budget;
