import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { setBudget } from '../store/budgetSlice'
import { Budget } from '../types/budget'
import Button from './Button'

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
        <form onSubmit={handleSubmit} className="space-y-4">
            <div>
                <label htmlFor="budget-amount" className="block text-sm font-medium text-gray-700">Budget Amount</label>
                <input
                    type="number"
                    id="budget-amount"
                    value={amount}
                    onChange={(e) => setAmount(Number(e.target.value))}
                    required
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
            </div>
            <div className="flex space-x-4">
                <div className="flex-1">
                    <label htmlFor="start-date" className="block text-sm font-medium text-gray-700">Start Date</label>
                    <input
                        type="date"
                        id="start-date"
                        value={startDate}
                        onChange={(e) => setStartDate(e.target.value)}
                        required
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                </div>
                <div className="flex-1">
                    <label htmlFor="end-date" className="block text-sm font-medium text-gray-700">End Date</label>
                    <input
                        type="date"
                        id="end-date"
                        value={endDate}
                        onChange={(e) => setEndDate(e.target.value)}
                        required
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                </div>
            </div>
            <Button type="submit" >Set Budget</Button>
        </form>
    )
}

export default BudgetForm
