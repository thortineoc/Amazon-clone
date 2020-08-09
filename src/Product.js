import React from 'react';
import './Product.css';
import Star from '@material-ui/icons/Star'
import {useStateValue} from './StateProvider.js'

function Product({ id, title, price, rating, image }) {
    const [{cart}, dispatch] = useStateValue();
    
    const addToCart = () => {
        dispatch({
            type: 'ADD_TO_CART',
            item: {
                id: id,
                title: title,
                price: price,
                rating: rating,
                image: image,
            },
        });
    };

    return (
        <div className="product">
            <div className="product__info">
                <p>{title}</p>
                <p className="product__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="product__rating">
                    {/* Creating an array of size $rating */}
                    {Array(rating) 
                    .fill()    
                    .map((_) => (
                    <p><Star className="product__star" /></p>
                    ))}
                </div>
            </div>
            <img src={image} alt="" />
            <button onClick={addToCart}>Add to Cart</button>
        </div>
    )
}

export default Product 