import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../store'

const TransactionList: React.FC = () => {
    const transactions = useSelector((state: RootState) => state.transactions.transactions)

    const categories = useSelector((state: RootState) => state.categories.categories)
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
    const filteredTransactions = selectedCategory
        ? transactions.filter((transaction) => transaction.category === selectedCategory)
        : transactions


    return (
        <div>
            <div>
                <label htmlFor="category">Filter by Category</label>
                <select
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    defaultValue=""
                >
                    <option value="">All Categories</option>
                    {categories.map((category) => (
                        <option key={category.id} value={category.name}>
                            {category.name}
                        </option>
                    ))}
                </select>
            </div>
            <ul>
                {filteredTransactions.map((transaction) => (
                    <li key={transaction.id}>
                        {transaction.type}: {transaction.amount} : {transaction.category}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default TransactionList
