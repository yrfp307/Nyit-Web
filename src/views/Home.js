import React from 'react';
import Card from 'react-bootstrap/Card'
import styled from 'styled-components';

const Styles = styled.div`
.card {
  font-size: 1.5em;
  position: center;
  margin: 200px;
}`;

export default function Home () {
  return (
    <div className="Home">
    <Styles>
    <Card>
    <Card.Header>Quote of the day!</Card.Header>
    <Card.Body>
    <blockquote className="blockquote mb-10">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere
        erat a ante.
      </p>
      <footer className="blockquote-footer">
        Someone famous in <cite title="Source Title">Source Title</cite>
      </footer>
    </blockquote>
    </Card.Body>
    </Card>
    </Styles>
    </div>
  );
};