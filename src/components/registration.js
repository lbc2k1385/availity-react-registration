import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import './registration.css'

export default class Registration  extends Component {

    preventDecimals = event => {
        if(event.keyCode === 190){
            event.preventDefault();
        }
      };

    render(){
        return(
            <Card bg="Light" text="Dark">
                <Card.Header><h4>Registration</h4></Card.Header>
                <Card.Body>
                    <Card.Title><h3>Create My Account</h3></Card.Title>
                    <Form>        
                        <Form.Group controlId="first-name">
                            <Form.Label>First Name</Form.Label>
                            <Form.Control placeholder="First Name" required/>
                        </Form.Group>

                        <Form.Group controlId="last-name">
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control placeholder="Last Name" required/>
                        </Form.Group>
                        
                        <Form.Group controlId="npi-number">
                            <Form.Label>NPI Number</Form.Label>
                            <Form.Control 
                                type="number" 
                                placeholder="NIP Number" 
                                min = '0' 
                                onKeyDown = {this.preventDecimals}
                                required/>
                        </Form.Group>

                        <Form.Group controlId="address">
                            <Form.Label>Business Address</Form.Label>
                            <Form.Control placeholder="Business Address" required/>
                        </Form.Group>

                        <Form.Group controlId="phone-number">
                            <Form.Label>Telephone Number</Form.Label>
                            <Form.Control placeholder="###-###-####" 
                                required 
                                type="tel"
                                pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                                title="The phone number must be in the following format: ###-###-####"/>
                            <Form.Control.Feedback type="invalid" >Phone number must be in the following format: ###-###-####</Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group controlId="email">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" required/>
                        </Form.Group>

                        <Form.Group controlId="confirm-email">
                            <Form.Label>Confirm Email</Form.Label>
                            <Form.Control type="email" placeholder="Enter Email" required/>
                        </Form.Group>

                        <Button variant="primary" type="submit">
                            Submit
                        </Button>

                    </Form>
                
                </Card.Body>
            </Card>          
           )
    }
}
