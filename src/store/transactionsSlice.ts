import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Transaction } from '../types/transaction' // 타입 정의 가져오기

// 트랜잭션 상태 타입 정의
type TransactionsState = {
    transactions: Transaction[];
}

// 초기 상태 정의
const initialState: TransactionsState = {
    transactions: [],  // 초기 상태는 빈 배열
}

// 슬라이스 생성
const transactionsSlice = createSlice({
    name: `transactions`,
    initialState,
    reducers: {
        // 트랜잭션 추가 액션
        addTransaction: (state, action: PayloadAction<Transaction>) => {
            state.transactions.push(action.payload)
        },
        // 트랜잭션 삭제 액션
        removeTransaction: (state, action: PayloadAction<string>) => {
            state.transactions = state.transactions.filter(
                transaction => transaction.id !== action.payload
            )
        },
    },
})

// 액션과 리듀서 내보내기
export const { addTransaction, removeTransaction } = transactionsSlice.actions
export default transactionsSlice.reducer
