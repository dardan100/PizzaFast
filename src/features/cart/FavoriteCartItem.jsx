import React from 'react'
import RemoveFavItem from './RemoveFavItem'
import Button from '../../ui/Button'
import { useDispatch, useSelector } from 'react-redux'
import { addItem, getCurrentQuantityById } from './cartSlice'

export default function FavoriteCartItem({
    item,
    ingredients,
    isLoadingIngredients,
    image,
}) {
    const { pizzaId, name, unitPrice } = item
    const currentQuantity = useSelector(getCurrentQuantityById(pizzaId))
    const isCurQuantity = currentQuantity > 0
    console.log(isCurQuantity)

    const dispatch = useDispatch()

    function handleAddCart() {
        const newItem = {
            pizzaId,
            name,
            unitPrice,
            quantity: 1,
            totalPrice: unitPrice * 1,
        }
        dispatch(addItem(newItem))
    }

    return (
        <li className="flex items-center gap-4 py-2">
            <img src={image} alt="s" className="h-20" />

            <div className="flex grow flex-col justify-center py-0.5">
                <p>{name}</p>
                <p className="text-sm capitalize italic text-stone-500">
                    {isLoadingIngredients
                        ? 'Loading...'
                        : ingredients.join(', ')}
                </p>
            </div>
            <div className="flex gap-4">
                {!isCurQuantity && (
                    <Button
                        type="small"
                        className="m-4"
                        onClick={handleAddCart}
                    >
                        Add to cart
                    </Button>
                )}
                <RemoveFavItem pizzaId={pizzaId} key={item.name} />
            </div>
        </li>
    )
}
