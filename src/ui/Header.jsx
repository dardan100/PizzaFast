import React from 'react'
import { Link } from 'react-router-dom'
import SearchOrder from '../features/order/SearchOrder'
import Username from '../features/user/Username'

import Button from './Button'
import { useSelector } from 'react-redux'
import { getFavoriteCart } from '../features/cart/cartSlice'

export default function Header() {
    const favInCart = useSelector(getFavoriteCart)

    return (
        <header className="flex items-center justify-between border-b border-stone-200 bg-yellow-400 px-4 py-3 font-sans uppercase sm:px-6">
            <Link to="/" className="tracking-widest">
                Fast React Pizza Co.
            </Link>
            <div className="flex items-center gap-2">
                {favInCart.length > 0 && (
                    <Button to="favorite" type="remove">
                        Favorite
                    </Button>
                )}
                <SearchOrder />
                <Username />
            </div>
        </header>
    )
}
