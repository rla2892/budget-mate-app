import React from 'react'
import BudgetForm from '../components/BudgetForm'
import BudgetSummary from '../components/BudgetSummary'

const Budget: React.FC = () => {
    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold mb-4">Budget Management</h1>
            <div className="mb-8">
                <BudgetForm />
            </div>
            <div className="mb-8">
                <BudgetSummary />
            </div>
        </div>
    )
}

export default Budget
