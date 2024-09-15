import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTransaction } from '../store/transactionsSlice'
import { Transaction } from '../types/transaction'

const TransactionForm: React.FC = () => {
    const [amount, setAmount] = useState(0)
    const [type, setType] = useState<`income` | `expense`>(`income`)
    const dispatch = useDispatch()

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        const newTransaction: Transaction = {
            id: Date.now().toString(),
            amount,
            type,
            category: `Other`,
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
            <button type="submit">Add Transaction</button>
        </form>
    )
}

export default TransactionForm
