import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTransaction } from '../store/transactionsSlice'
import { Transaction } from '../types/transaction'
import { v4 as uuidv4 } from 'uuid'
import { RootState } from '../store'
import Button from './Button'

const TransactionForm: React.FC = () => {
    const [amount, setAmount] = useState(0)
    const [type, setType] = useState<`income` | `expense`>(`income`)
    const [category, setCategory] = useState(``)
    const dispatch = useDispatch()
    const categories = useSelector((state: RootState) => state.categories.categories)

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        const newTransaction: Transaction = {
            id: uuidv4(),
            amount,
            type,
            category: category || categories[0]?.name || `Other`,
            date: new Date().toISOString(),
        }
        dispatch(addTransaction(newTransaction))
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex space-x-4">
                <div className="flex-1">
                    <label htmlFor="transaction-amount" className="block text-sm font-medium text-gray-700">Amount</label>
                    <input
                        type="number"
                        id="transaction-amount"
                        data-testid="transaction-amount"
                        value={amount}
                        onChange={(e) => setAmount(Number(e.target.value))}
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                </div>
                <div className="flex-1">
                    <label htmlFor="transaction-type" className="block text-sm font-medium text-gray-700">Type</label>
                    <select
                        id="transaction-type"
                        value={type}
                        onChange={(e) => setType(e.target.value as `income` | `expense`)}
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    >
                        <option value="income">Income</option>
                        <option value="expense">Expense</option>
                    </select>
                </div>
                <div className="flex-1">
                    <label htmlFor="transaction-category" className="block text-sm font-medium text-gray-700">Category</label>
                    <select
                        id="transaction-category"
                        value={category}
                        onChange={(e) => setCategory(e.target.value || `Other`)}
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    >
                        {categories.map((category: any) => (
                            <option key={category.id} value={category.name}>{category.name}</option>
                        ))}
                    </select>
                </div>
            </div>
            <Button type="submit">Add Transaction</Button>
        </form>
    )
}

export default TransactionForm
