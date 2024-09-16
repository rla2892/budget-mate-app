// src/components/CategoryExpenseChart.tsx
import React from 'react'
import { useSelector } from 'react-redux'
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts'
import { RootState } from '../store'

const COLORS = [`#0088FE`, `#00C49F`, `#FFBB28`, `#FF8042`, `#AF19FF`]

const CategoryExpenseChart: React.FC = () => {
    const transactions = useSelector((state: RootState) => state.transactions.transactions)
    const categories = useSelector((state: RootState) => state.categories.categories)

    // 카테고리별 지출 계산
    const data = categories.map((category) => {
        const total = transactions
            .filter((transaction) => transaction.category === category.name && transaction.type === `expense`)
            .reduce((sum, transaction) => sum + transaction.amount, 0)

        return { name: category.name, value: total }
    })

    return (
        <PieChart width={400} height={400}>
            <Pie
                data={data}
                cx={200}
                cy={200}
                outerRadius={150}
                fill="#8884d8"
                dataKey="value"
                label
            >
                {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
            </Pie>
            <Tooltip />
            <Legend />
        </PieChart>
    )
}

export default CategoryExpenseChart
