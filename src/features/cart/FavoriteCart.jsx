import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'

import { Link, useFetcher } from 'react-router-dom'
import { getFavoriteCart } from './cartSlice'

import FavoriteCartItem from './FavoriteCartItem'
import EmptyCart from './EmptyCart'

export default function FavoriteCart() {
    const favCart = useSelector(getFavoriteCart)
    const fetcher = useFetcher()

    useEffect(
        function () {
            if (!fetcher.data && fetcher.state === 'idle')
                return fetcher.load('/menu')
        },
        [fetcher]
    )

    if (!favCart.length) return <EmptyCart />
    return (
        <div className="px-4 py-3">
            <Link
                to="/menu"
                className="text-sm text-blue-500 hover:text-blue-600"
            >
                &larr; Back to menu
            </Link>
            <ul className="mt-3 divide-y divide-stone-300 border-b border-b-stone-300">
                {favCart.map((item) => (
                    <FavoriteCartItem
                        item={item}
                        key={item.pizzaId}
                        ingredients={
                            fetcher?.data?.find((el) => el.id === item.pizzaId)
                                ?.ingredients ?? []
                        }
                        isLoadingIngredients={fetcher.state === 'loading'}
                        image={
                            fetcher?.data?.find((el) => el.id === item.pizzaId)
                                ?.imageUrl ?? []
                        }
                    />
                ))}
            </ul>
        </div>
    )
}
