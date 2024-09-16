import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { setBudget } from '../store/budgetSlice'
import { Budget } from '../types/budget'

const BudgetForm: React.FC = () => {
    const [amount, setAmount] = useState(0)
    const [startDate, setStartDate] = useState(``)
    const [endDate, setEndDate] = useState(``)
    const dispatch = useDispatch()

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()

        const newBudget: Budget = {
            id: Date.now().toString(),
            amount,
            startDate,
            endDate,
        }

        dispatch(setBudget(newBudget))
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Budget Amount</label>
                <input
                    type="number"
                    value={amount}
                    onChange={(e) => setAmount(Number(e.target.value))}
                    required
                />
            </div>
            <div>
                <label>Start Date</label>
                <input
                    type="date"
                    value={startDate}
                    onChange={(e) => setStartDate(e.target.value)}
                    required
                />
            </div>
            <div>
                <label>End Date</label>
                <input
                    type="date"
                    value={endDate}
                    onChange={(e) => setEndDate(e.target.value)}
                    required
                />
            </div>
            <button type="submit">Set Budget</button>
        </form>
    )
}

export default BudgetForm
