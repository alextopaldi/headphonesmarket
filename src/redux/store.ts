import { combineReducers, configureStore } from "@reduxjs/toolkit";
import productReducer from "./redusers/ProductSlice"

const rootReduser = combineReducers({
    productReducer
})

export const setupStore = () => {
    return configureStore ({
        reducer: rootReduser
    })
}

export type RootState = ReturnType<typeof rootReduser>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']