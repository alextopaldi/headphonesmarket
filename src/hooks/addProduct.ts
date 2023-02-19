import { ProductModel } from "../models/ProductModel"
import { ProductSlice } from "../redux/redusers/ProductSlice"
import { useAppDispatch, useAppSelector } from "./redux"

interface useAddProductProps {
    product : ProductModel
}

export function useAddProduct({product} : useAddProductProps) {
    const {products} = useAppSelector(state => state.productReducer)
    const {busketProducts, countProducts} = ProductSlice.actions
    const dispatch = useAppDispatch()
    
    function AddProduct1() {
        if (products.find(item => item.id == product.id)) {
            dispatch(countProducts(product.id))
        }
        else {
            dispatch(busketProducts(product))
        }
    }

    return {AddProduct1}
}