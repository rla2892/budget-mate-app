import React from 'react'
import BudgetForm from '../components/BudgetForm'
import BudgetSummary from '../components/BudgetSummary'

const Budget: React.FC = () => {
    return (
        <div>
            <h1>Budget Management</h1>
            <BudgetForm />
            <BudgetSummary />
        </div>
    )
}

export default Budget
