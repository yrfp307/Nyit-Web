import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export default function Contact () {
  return (
  <div className="Contact">
    <h2>Contact Us</h2>
    <Form>
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
  </div>
  );
}