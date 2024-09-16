import React from 'react'
import BudgetSummary from '../components/BudgetSummary'
import TransactionList from '../components/TransactionList'
import CategoryExpenseChart from '../components/CategoryExpenseChart' // 카테고리 차트 컴포넌트 (구현 예정)

const Dashboard: React.FC = () => {
    return (
        <div>
            <h1>Dashboard</h1>
            <BudgetSummary />
            <h2>Recent Transactions</h2>
            <TransactionList />
            <h2>Category-wise Expense</h2>
            <CategoryExpenseChart />  {/* 카테고리별 지출 차트 */}
        </div>
    )
}

export default Dashboard
