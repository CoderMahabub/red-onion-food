import { useEffect, useState } from "react";
const useItems = () => {
    const [foodItems, setFoodItem] = useState([]);


    useEffect(() => {
        fetch('foodItems.json')
            .then(res => res.json())
            .then(data => setFoodItem(data.items))
    }, [])

    return {
        foodItems
    }
}

export default useItems;