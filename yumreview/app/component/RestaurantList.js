import { useState, useEffect } from 'react'

export default function RestaurantList() {
    const [restaurants, setRestaurants] = useState([])

    useEffect(() => {
        fetch('/api/restaurant')
            .then(res => res.json())
            .then(data => setRestaurants(data))
    }, [])

    return (
        <div>
            <h2>Restaurant List</h2>
            <ul>
                {restaurants.map(restaurant => (
                    <li key={restaurant.id}>{restaurant.name} - {restaurant.location}</li>
                ))}
            </ul>
        </div>
    )
}