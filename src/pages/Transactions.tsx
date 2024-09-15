import React from 'react'
import TransactionForm from '../components/TransactionForm'
import TransactionList from '../components/TransactionList'

const Transactions: React.FC = () => {
    return (
        <div>
            <h1>Transactions</h1>
            <TransactionForm />
            <TransactionList />
        </div>
    )
}

export default Transactions
