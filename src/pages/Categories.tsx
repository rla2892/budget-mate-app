import React from 'react'
import CategoryForm from '../components/CategoryForm'
import CategoryList from '../components/CategoryList'

const Categories: React.FC = () => {
    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold mb-4">Categories</h1>
            <div className="mb-8">
                <CategoryForm />
            </div>
            <div className="mb-8">
                <CategoryList />
            </div>
        </div>
    )
}

export default Categories
