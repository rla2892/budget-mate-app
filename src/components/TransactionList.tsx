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
        <div className="space-y-4">
            <div>
                <label htmlFor="category-filter" className="block text-sm font-medium text-gray-700">Filter by Category</label>
                <select
                    id="category-filter"
                    value={selectedCategory || undefined}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                >
                    <option value="All">All</option>
                    {categories.map((category: any) => (
                        <option key={category.id} value={category.name}>
                            {category.name}
                        </option>
                    ))}
                </select>
            </div>
            <ul className="space-y-2">
                {filteredTransactions.map((transaction: any) => (
                    <li key={transaction.id} className="p-4 border border-gray-300 rounded-md shadow-sm">
                        <div className="flex justify-between">
                            <span className="font-semibold">{transaction.type}</span>
                            <span>{transaction.amount}</span>
                        </div>
                        <div className="text-gray-500">{transaction.category}</div>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default TransactionList
