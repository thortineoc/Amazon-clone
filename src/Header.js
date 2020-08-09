import React from 'react'
import "./Header.css"
import {Link} from "react-router-dom"
import SearchIcon from '@material-ui/icons/Search'
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket'
import {useStateValue} from './StateProvider'
import {auth} from './firebase.js'

{/* functional component as well as */}
{/* const Header = () => { ... } */}
function Header() {
    const [{cart, user}] = useStateValue();
    //const [state, dispatch] = useStateValue();
    //const [{cart}, dispatch] = useStateValue(); {/* like item state and action(adding or removing) */}
    console.log(cart);

    const login = () => {
        if(user) {
            auth.signOut();
        }
    }

    return (
        <nav className="header"> {/* HTML5 convension, instead of div*/}
            {/* Image */}
            <Link to="/">
                <img
                className="header__logo"
                src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
                alt="amazon logo" />
            </Link>
            {/* Search box */}
            <div className="header__search">
                <input type="text" className="header__searchInput" />
                <SearchIcon className="header__searchIcon" />
            </div>
            {/* Three links */}
            <div className="header__nav">
                {/* 1st link */}
                <Link to={!user && "/login"} className="header__link"> {/* Not refreashing the page */}
                    <div onClick={login} className="header__option">
                        <span className="header__optionLineOne">Hello {user?.email}</span>
                        <span className="header__optionLineTwo">{user ? 'Sign out' : 'Sign in'}</span>
                    </div>
                </Link>
                {/* 2nd link */}
                <Link to="/" className="header__link">
                    <div className="header__option">
                        <span className="header__optionLineOne">Returns</span>
                        <span className="header__optionLineTwo">& orders</span>
                    </div>
                </Link>
                {/* 3rd link */}
                <Link to="/" className="header__link">
                    <div className="header__option">
                        <span className="header__optionLineOne">Your</span>
                        <span className="header__optionLineTwo">Prime</span>
                    </div>
                </Link>
                {/* 4th link */}
                <Link to="checkout" className="header__link">
                    <div className="header__optionBasket">
                         {/* Icon */}
                         <ShoppingBasketIcon />
                        {/* Number of elements */}
                        <span className="header__optionLineTwo header__basketCount">{cart?.length}</span>
                    </div>
                </Link>
            </div>

        </nav>
    )
}

export default Header