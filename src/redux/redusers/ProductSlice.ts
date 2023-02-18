import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProductModel } from "../../models/ProductModel";

interface ProductState {
    products : ProductModel[]
}

function TotalProducts() {
    if (localStorage.getItem('products') != null) {
        const raw : any = localStorage.getItem('products') || []
        const res : ProductModel[] = JSON.parse(raw)
        return res
    }
    return []
}

const initialState: ProductState = {
    products: TotalProducts()
}

export const ProductSlice = createSlice ({
    name: 'product', 
    initialState,
    reducers: {
        busketProducts(state, action: PayloadAction<ProductModel>) {
            state.products.push(action.payload)
        },
        countProducts(state, action: PayloadAction<number>) {
            let index = state.products.findIndex(product => product.id == action.payload)
            state.products[index].count += 1
        },
        minusCountProducts(state, action: PayloadAction<number>) {
            let index = state.products.findIndex(product => product.id == action.payload)
            state.products[index].count -= 1
        },
        deleteProduct(state, action: PayloadAction<number>) {
            state.products = state.products.filter(item => item.id != action.payload)
        },
        deleteProducts(state) {
            state.products = []
        }
    }
})

export default ProductSlice.reducer