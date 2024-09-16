import React from 'react'
import BudgetSummary from '../components/BudgetSummary'
import TransactionList from '../components/TransactionList'
import CategoryExpenseChart from '../components/CategoryExpenseChart'

const Dashboard: React.FC = () => {
    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold mb-4">Dashboard</h1>
            <div className="mb-8">
                <BudgetSummary />
            </div>
            <h2 className="text-2xl font-semibold mb-4">Recent Transactions</h2>
            <div className="mb-8">
                <TransactionList />
            </div>
            <h2 className="text-2xl font-semibold mb-4">Category-wise Expense</h2>
            <div className="mb-8 flex justify-center">
                <CategoryExpenseChart />
            </div>
        </div>
    )
}

export default Dashboard
