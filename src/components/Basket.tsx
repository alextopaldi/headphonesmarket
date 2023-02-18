import { ProductModel } from "../models/ProductModel"
import {faPlus, faMinus, faTrash} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useAppDispatch } from "../hooks/redux"
import { ProductSlice } from "../redux/redusers/ProductSlice"
import { Link } from "react-scroll"

 
interface BasketProps {
    products : ProductModel[],
    basketClass : string,
    BasketHide : () => void
}


export function Basket({products, basketClass, BasketHide} : BasketProps) {

    const {minusCountProducts, countProducts, deleteProduct, deleteProducts} = ProductSlice.actions
    const dispatch = useAppDispatch()

    function TotalPrice() {
        let price = 0
        products.map(item => price+=item.price*item.count)
        return price
    }

    function TotalCount() {
        let count = 0
        products.map(item => count += item.count)
        return count
    }

    function CountMinus(product: ProductModel) {
        if (product.count == 1) {
            dispatch(deleteProduct(product.id))
        }
        else {
            dispatch(minusCountProducts(product.id))
        }
    }

    return (
        <div className={basketClass}>
            {products.length!=0 && 
                <div className="basket-btns-text">
                    <div className="basket-results">
                        <p>Items: <b>{TotalCount()}</b></p>
                        <p>Total: <b>{TotalPrice()}$</b></p>
                    </div>
                    <div className="basket-btns">
                        <button onClick={() => dispatch(deleteProducts())}>Clear cart</button>
                        <button>Submit</button>
                    </div>
                </div>}
            <div className="basket-products">
                {products.length!=0? products.map(product => 
                <div key={product.id} className="basket-item">
                    <div onClick={() => dispatch(deleteProduct(product.id))} className="backet-closer">
                        <FontAwesomeIcon className="backet-icon" icon={faTrash}></FontAwesomeIcon>
                    </div>
                    <img src={product.img} alt="" />
                    <div className="basket-text">
                        <p>{product.name}</p>
                        <div className="backet-counter">
                            <FontAwesomeIcon onClick={() => CountMinus(product)} className="backet-icon" icon={faMinus}></FontAwesomeIcon>
                            <p className="backet-count">{product.count}</p>
                            <FontAwesomeIcon onClick={() => dispatch(countProducts(product.id))} className="backet-icon" icon={faPlus}></FontAwesomeIcon>
                        </div>
                        <p className="basket-price">{product.price*product.count}$</p>
                    </div>
                </div>)
                : 
                <div className="empty-basket-items">
                    <h6>Your shopping cart is empty!</h6>
                    <Link className="empty-basket-items__btn" to="product" smooth={true} duration={1000} onClick={BasketHide}>Add new item</Link>
                </div>}
            </div>
        </div>
    )
}