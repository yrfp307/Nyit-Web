import React from 'react';
import styled from 'styled-components';
import Card from 'react-bootstrap/Card';

const Styles = styled.div`
.card {
  font-size: 1em;
  margin: 50px;
}`;

export default function CardAbout({image, title, text}) {
    return (
        // <div className= "Card-deck">
        //     <div className= "Card">
        //     <Styles>
        //     <span style={{color: 'black', fontFamily: 'Alata, sans-serif', fontSize: 14, fontWeight: 'bold'}}>{title}</span>
        //     <span style={{color: 'black', fontFamily: 'Alata, sans-serif', fontSize: 10}}>{text}</span>
        //     </Styles>
        //     </div>
        // </div>
        <Styles>
        <Card>
            <Card.Img variant="top" src={image} width="300" height="200"/>
            <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>{text}</Card.Text>
            </Card.Body>
        </Card>
        </Styles>
    )
}
