import React from 'react';
import {useStateValue} from './StateProvider.js';
import './Checkout.css';
import CheckoutProduct from './CheckoutProduct.js';
import Subtotal from './Subtotal.js';

function Checkout() {
    const [{cart}] = useStateValue();

    return (
        <div className="checkout">
            <div className="checkout__left">
                <img 
                className="checkout__ad"
                src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
                alt=""
                />
                { cart?.length === 0 ? (
                <div>
                    <h2 className="checkout__title">Your Amazon Cart is empty</h2>
                    <img 
                    className="checkout__emptyImg"
                    src="https://m.media-amazon.com/images/G/01/cart/empty/kettle-desaturated._CB445243794_.svg"
                    alt=""
                    />
                </div>
                ) : ( 
                <div> 
                <h2 className="checkout__title">Shopping cart</h2>
                    {cart.map(item => (
                        <CheckoutProduct
                            id={item.id}
                            title={item.title}
                            rating={item.rating}
                            price={item.price}
                            image={item.image}
                        />
                    ))}
                </div>
                )}
            </div>
            {cart.length > 0 && (
                <div className="checkout__right">
                    <Subtotal />
                </div>
            )}
        </div>
    );
}

export default Checkout