import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../store'

const BudgetSummary: React.FC = () => {
    const budget = useSelector((state: RootState) => state.budget.budget)
    const transactions = useSelector((state: RootState) => state.transactions.transactions)

    // 지출 금액 계산
    const totalExpenses = transactions
        .filter((transaction) => transaction.type === `expense`)
        .reduce((sum, transaction) => sum + transaction.amount, 0)

    if (!budget) {
        return <p>No budget set</p>
    }

    const remainingBudget = budget.amount - totalExpenses
    const isOverBudget = remainingBudget < 0

    return (
        <div className="p-4 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4">Budget Summary</h2>
            <p className="text-lg">Total Budget: <span className="font-semibold">{budget.amount}</span></p>
            <p className="text-lg">Total Expenses: <span className="font-semibold">{totalExpenses}</span></p>
            <p className={`text-lg ${isOverBudget ? `text-red-500` : `text-green-500`}`}>
                Remaining Budget: <span className="font-semibold">{remainingBudget}</span>
            </p>
            {isOverBudget && <p className="text-red-500 font-bold">Warning: You are over your budget!</p>}
        </div>
    )
}

export default BudgetSummary
