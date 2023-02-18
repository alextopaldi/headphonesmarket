import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { ProductModel } from "../models/ProductModel";
import {ProductSlice} from "../redux/redusers/ProductSlice";

interface ProductProps {
    product : ProductModel
}

export function Product({product} : ProductProps) {

    const {products} = useAppSelector(state => state.productReducer)
    const {busketProducts, countProducts} = ProductSlice.actions
    const dispatch = useAppDispatch()
    
    function AddProduct() {
        if (products.find(item => item.id == product.id)) {
            dispatch(countProducts(product.id))
        }
        else {
            dispatch(busketProducts(product))
        }
    }

    return(
    <div className="product__item">
        <div className="product__img-text">
            <div className="product__img">
                <img src={product.img} alt="" />
                <div onClick={AddProduct} className="product-icon-container">
                    <FontAwesomeIcon  className="product-icon" icon={faCartShopping}></FontAwesomeIcon>
                </div>
            </div>
            <div className="product__text-price">
                <p>{product.name}</p>
                <p className="product-price">$ {product.price}</p>
            </div>
        </div>
        {/* {products.map(item => <h1>{item.name}</h1>)} */}
    </div>
    )
}