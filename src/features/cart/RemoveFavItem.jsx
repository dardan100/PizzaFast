import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteFavItem } from './cartSlice'
import Button from '../../ui/Button'

export default function RemoveFavItem({ pizzaId }) {
    const dispatch = useDispatch()
    return (
        <Button type="remove" onClick={() => dispatch(deleteFavItem(pizzaId))}>
            Remove
        </Button>
    )
}
