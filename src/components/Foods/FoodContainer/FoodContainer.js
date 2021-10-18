import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './FoodContainer.css';

const FoodContainer = ({ foodItem }) => {
    const { foodId, fTitle, fDescription, fPrice, fThumbnail } = foodItem;
    return (
        <Col>
            <Card>
                <Card.Img className="food-thumbnail" variant="top" src={fThumbnail} />
                <Card.Body>
                    <Card.Title>{fTitle}</Card.Title>
                    <Card.Text>
                        {fDescription}
                    </Card.Text>
                    <strong className="text-muted">{fPrice}</strong>
                </Card.Body>
                <Card.Footer>
                    <Link to={`/food/${foodId}`}>
                        <button className="btn-primary">Select Item</button>
                    </Link>
                </Card.Footer>
            </Card>
        </Col>
    );
};

export default FoodContainer;