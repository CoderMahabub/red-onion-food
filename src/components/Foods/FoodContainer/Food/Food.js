import React from 'react';
import { useParams } from 'react-router';
import useItems from '../../../../hooks/useItems';

const Food = () => {
    const { foodId } = useParams();
    const { foodItems } = useItems();
    // console.log(foodItems);
    const result = foodItems.find((foodItem) => foodItem.foodId === foodId);
    console.log(result.fDescription);
    // const { fPrice } = result;
    // console.log(fPrice);
    return (
        <div>
            <h1>Single Food Detail({foodId})</h1>
            <h1>{result.fPrice}</h1>
        </div>
    );
};

export default Food;