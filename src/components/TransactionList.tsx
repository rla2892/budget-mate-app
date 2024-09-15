import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../store'

const TransactionList: React.FC = () => {
    const transactions = useSelector((state: RootState) => state.transactions.transactions)

    return (
        <ul>
            {transactions.map((transaction) => (
                <li key={transaction.id}>
                    {transaction.type}: {transaction.amount}
                </li>
            ))}
        </ul>
    )
}

export default TransactionList
