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
        <form onSubmit={handleSubmit}>
            <input
                type="number"
                id="transaction-amount"
                data-testid="transaction-amount"
                value={amount}
                onChange={(e) => setAmount(Number(e.target.value))}
            />
            <select value={type} onChange={(e) => setType(e.target.value as `income` | `expense`)}>
                <option value="income">Income</option>
                <option value="expense">Expense</option>
            </select>
            <select value={category} onChange={(e) => setCategory(e.target.value || `Other`)}>
                {categories.map((category) => (
                    <option key={category.id} value={category.name}>{category.name}</option>
                ))}
            </select>
            <Button type="submit">Add Transaction</Button>
        </form>
    )
}

export default TransactionForm
