import React from 'react';
import Card from 'react-bootstrap/Card';

export default function CardAbout({image, title, text}) {
    return (
        <Card>
            <Card.Img src={image}/>
            <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>{text}</Card.Text>
            </Card.Body>
        </Card>
    )
}
