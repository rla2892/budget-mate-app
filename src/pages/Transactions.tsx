import React from 'react'
import TransactionForm from '../components/TransactionForm'
import TransactionList from '../components/TransactionList'

const Transactions: React.FC = () => {
    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold mb-4">Transactions</h1>
            <div className="mb-8">
                <TransactionForm />
            </div>
            <div className="mb-8">
                <TransactionList />
            </div>
        </div>
    )
}

export default Transactions
