import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useAddProduct } from "../hooks/addProduct";
import { ProductModel } from "../models/ProductModel";

interface ProductProps {
    product : ProductModel
}

export function Product({product} : ProductProps) {
    const {AddProduct1} = useAddProduct({product: product})

    return(
    <div className="product__item">
        <div className="product__img-text">
            <div className="product__img">
                <img src={product.img} alt="" />
                <div onClick={AddProduct1} className="product-icon-container">
                    <FontAwesomeIcon  className="product-icon" icon={faCartShopping}></FontAwesomeIcon>
                </div>
            </div>
            <div className="product__text-price">
                <p>{product.name}</p>
                <p className="product-price">$ {product.price}</p>
            </div>
        </div>
    </div>
    )
}