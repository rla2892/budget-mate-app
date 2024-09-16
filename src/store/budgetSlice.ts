import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Budget } from '../types/budget'

interface BudgetState {
    budget: Budget | null;  // 예산은 초기에는 null
}

const initialState: BudgetState = {
    budget: null,
}

const budgetSlice = createSlice({
    name: `budget`,
    initialState,
    reducers: {
        setBudget: (state, action: PayloadAction<Budget>) => {
            state.budget = action.payload
        },
        updateBudget: (state, action: PayloadAction<Budget>) => {
            state.budget = { ...state.budget, ...action.payload }
        },
        clearBudget: (state) => {
            state.budget = null
        },
    },
})

export const { setBudget, updateBudget, clearBudget } = budgetSlice.actions
export default budgetSlice.reducer
