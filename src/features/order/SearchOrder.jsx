import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function SearchOrder() {
    const [query, setQuery] = useState('')
    const navigate = useNavigate()

    function handleSubmit(e) {
        e.preventDefault()

        if (!query) return
        navigate(`/order/${query}`)
        setQuery('')
    }
    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={query}
                placeholder="Search Order #"
                onChange={(e) => setQuery(e.target.value)}
                className="input h-10 w-40 bg-yellow-100 transition-all placeholder:italic sm:w-72 sm:focus:w-80"
            />
        </form>
    )
}
