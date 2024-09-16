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
        <ul>
            {categories.map((category) => (
                <li key={category.id}
                    style={{
                        display: `flex`,
                        justifyContent: `normal`,
                        alignItems: `center`,
                        marginBottom: `10px`,
                    }}
                >
                    <span>{category.name}</span>
                    <span style={
                        {
                            backgroundColor: category.color,
                            display: `inline-block`,
                            width: `20px`,
                            height: `20px`,
                        }
                    }></span>
                    <button onClick={() => handleDelete(category.id)}>Delete</button>
                </li>
            ))}
        </ul>
    )
}

export default CategoryList
