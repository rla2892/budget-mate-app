import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Category } from '../types/category'

interface CategoriesState {
    categories: Category[];
}

const initialState: CategoriesState = {
    categories: [], // 초기 카테고리 리스트는 빈 배열
}

const categoriesSlice = createSlice({
    name: `categories`,
    initialState,
    reducers: {
        addCategory: (state, action: PayloadAction<Category>) => {
            state.categories.push(action.payload)
        },
        removeCategory: (state, action: PayloadAction<string>) => {
            state.categories = state.categories.filter(
                (category) => category.id !== action.payload
            )
        },
        updateCategory: (state, action: PayloadAction<Category>) => {
            const category = state.categories.find(
                (category) => category.id === action.payload.id
            )
            if (category) {
                category.name = action.payload.name
                category.color = action.payload.color
            }
            // const index = state.categories.findIndex(
            //     (category) => category.id === action.payload.id
            // )
            // if (index !== -1) {
            //     state.categories[index] = action.payload
            // }
        },
    },
})

export const { addCategory, removeCategory, updateCategory } = categoriesSlice.actions
export default categoriesSlice.reducer
