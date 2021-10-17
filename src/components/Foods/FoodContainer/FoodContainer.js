import React from 'react';
import { Card, Col } from 'react-bootstrap';

const FoodContainer = ({ foodItem }) => {
    const { fTitle, fDescription, fPrice, fThumbnail } = foodItem;
    return (
        <Col>
            <Card>
                <Card.Img variant="top" src={fThumbnail} />
                <Card.Body>
                    <Card.Title>{fTitle}</Card.Title>
                    <Card.Text>
                        {fDescription}
                    </Card.Text>
                    <strong className="text-muted">{fPrice}</strong>
                </Card.Body>
                <Card.Footer>
                    <button className="btn-primary">Select Item</button>
                </Card.Footer>
            </Card>
        </Col>
    );
};

export default FoodContainer;