import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import styled from 'styled-components';

const Styles = styled.div`
.h2 {
  font-size: 1em;
  margin-top: 50px;
  margin-left: 100px;
  margin-right: 100px;
},
.form-group .button {
  margin-left: 50px;
  margin-right: 50px;
  max-width: 100vw;
  max-height: 100vh;
}`;

export default function Contact () {
  return (
  <div className="Contact">
    <Styles>
    <Form>
    <h2>Contact Me</h2>
    <Form.Group controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
    </Form.Group>
    <Form.Group controlId="formBasicEmail">
    <Form.Label>Message</Form.Label>
    <Form.Control type="text" rows="5" maxlength= "200" placeholder="Enter message" />
    </Form.Group>.
    <Button variant="primary" type="submit">
      Submit
    </Button>
    </Form>
    </Styles>
  </div>
  );
}
