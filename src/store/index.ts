import { configureStore } from '@reduxjs/toolkit'
import transactionsReducer from './transactionsSlice'

export const store = configureStore({
    reducer: {
        transactions: transactionsReducer,  // 슬라이스 리듀서를 연결
    },
})

// RootState와 AppDispatch 타입 추출
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
