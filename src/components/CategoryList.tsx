import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeCategory } from '../store/categoriesSlice'
import { RootState } from '../store'

const CategoryList: React.FC = () => {
    const categories = useSelector((state: RootState) => state.categories.categories)
    const dispatch = useDispatch()

    const handleDelete = (id: string) => {
        dispatch(removeCategory(id))
    }

    return (
        <div className="p-4 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4">Category List</h2>
            <ul className="space-y-2">
                {categories.map((category) => (
                    <li key={category.id} className="p-4 border border-gray-300 rounded-md shadow-sm flex justify-between items-center">
                        <span className="font-semibold">{category.name}</span>
                        <span className="w-6 h-6 rounded-full" style={{ backgroundColor: category.color }}></span>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default CategoryList
