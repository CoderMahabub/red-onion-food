import { useEffect, useState } from "react";
const useItems = () => {
    const [foodItems, setFoodItem] = useState([]);


    useEffect(() => {
        fetch('https://raw.githubusercontent.com/CoderMahabub/red-onion-food/main/public/foodItems.json')
            .then(res => res.json())
            .then(data => setFoodItem(data.items))
    }, [])

    return {
        foodItems
    }
}

export default useItems;