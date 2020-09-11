import React from 'react';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';

export default function About () {
  return (
  <div className="About">
  <CardDeck>
  <Card>
    <Card.Img variant="top" src="mikimosImage.jpg" width="300" height="200"/>
    <Card.Body>
      <Card.Title>My Self</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This content is a little bit longer.
      </Card.Text>
    </Card.Body>
  </Card>
  <Card>
    <Card.Img variant="top" src="mikimosImage.jpg" width="300" height="200" />
    <Card.Body>
      <Card.Title>My Family</Card.Title>
      <Card.Text>
        This card has supporting text below as a natural lead-in to additional
        content.
      </Card.Text>
    </Card.Body>
  </Card>
  <Card>
    <Card.Img variant="top" src="mikimosImage.jpg" width="300" height="200" />
    <Card.Body>
      <Card.Title>My Friends</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This card has even longer content than the first to
        show that equal height action.
      </Card.Text>
    </Card.Body>
  </Card>
</CardDeck>

  </div>
);
}