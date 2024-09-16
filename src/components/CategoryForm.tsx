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
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Category Name"
                required
            />
            <input
                type="color"
                value={color}
                onChange={(e) => setColor(e.target.value)}
            />
            <Button type="submit">Add Category</Button>
        </form>
    )
}

export default CategoryForm
