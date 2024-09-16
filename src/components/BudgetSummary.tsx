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
        <div>
            <h2>Budget Summary</h2>
            <p>Total Budget: {budget.amount}</p>
            <p>Total Expenses: {totalExpenses}</p>
            <p>Remaining Budget: {budget.amount - totalExpenses}</p>
            {isOverBudget && <p style={{ color: `red` }}>Warning: You are over your budget!</p>}
        </div>
    )
}

export default BudgetSummary
