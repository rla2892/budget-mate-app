import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addCategory } from '../store/categoriesSlice'
import { Category } from '../types/category'
import Button from './Button'

const CategoryForm: React.FC = () => {
    const [name, setName] = useState(``)
    const [color, setColor] = useState(`#000000`)
    const dispatch = useDispatch()

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        const newCategory: Category = {
            id: Date.now().toString(),
            name,
            color,
        }
        dispatch(addCategory(newCategory))
        setName(``) // 입력값 초기화
        setColor(`#000000`) // 색상 초기화
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex space-x-4">
                <div className="flex-1">
                    <label htmlFor="category-name" className="block text-sm font-medium text-gray-700">Category Name</label>
                    <input
                        type="text"
                        id="category-name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Category Name"
                        required
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                </div>
                <div className="flex-1">
                    <label htmlFor="category-color" className="block text-sm font-medium text-gray-700">Category Color</label>
                    <input
                        type="color"
                        id="category-color"
                        value={color}
                        onChange={(e) => setColor(e.target.value)}
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                </div>
            </div>
            <Button type="submit" >Add Category</Button>
        </form>
    )
}

export default CategoryForm
