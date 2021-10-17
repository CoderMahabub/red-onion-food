import React from 'react';
import { Button, CardGroup, Row } from 'react-bootstrap';
import useItems from '../../hooks/useItems';
import FoodContainer from './FoodContainer/FoodContainer';

const Foods = () => {
    const { foodItems } = useItems();
    return (
        <div className="my-5">
            {/* <h1>Foods{foodItem.length}</h1> */}
            <>
                <Button variant="info" className="me-2 btn-sm">Breakfast</Button>
                <Button variant="info" className="me-2 btn-sm">Lunch</Button>
                <Button variant="info" className="me-2 btn-sm">Dinner</Button>
            </>
            <div className="container my-5">
                <Row xs={1} md={3} className="g-4">
                    {
                        foodItems.map(foodItem => <FoodContainer
                            key={foodItem.foodId}
                            foodItem={foodItem}
                        ></FoodContainer>)
                    }
                </Row>
            </div>
        </div>
    );
};

export default Foods;