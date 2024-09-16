import React from 'react'
import CategoryForm from '../components/CategoryForm'
import CategoryList from '../components/CategoryList'

const Categories: React.FC = () => {
    return (
        <div>
            <h1>Categories</h1>
            <CategoryForm />
            <CategoryList />
        </div>
    )
}

export default Categories
