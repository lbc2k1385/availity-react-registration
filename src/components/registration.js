import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './registration.css';
import * as myConstClass from './Constants/Constants'
 
export default class Registration  extends Component {

    /*
     * FYI.  I know ths is a cheat to hardcode the states.  
     * But frankly I couldn't find a good API to do this, 
     * and I ran out of time
     * */
    states = myConstClass.states;

    state = {
        firstName: "",
        lastName: "",
        npiNumber: "",
        businessAddress: "",
        city: "",
        state: "",
        phoneNumber:  "",
        email: "",
        confirmedEmail: "",
        confirmedEmailTouched:false,
        emailError:false
    }

    preventDecimalsAndNegatives = event => {
        if(event.keyCode === 190 || event.keyCode === 189){
            event.preventDefault();
        }
      };

    //This is where a service could be called to submit the data
     handleSubmit = (event ) => {
        event.preventDefault();

        if(this.state.emailError){
            alert("Data cannot be submitted.  Emails do not match.")
        }else{
            console.log(this.state);
        }
        
     }

     validateEmail = e =>{

        if([e.target.name] == 'confirmedEmail' && e.target.value != this.state.email){
            this.setState({
                emailError:true,
                confirmedEmailTouched:true
            })
         }
         else if(this.state.confirmedEmailTouched && [e.target.name] == 'email' && e.target.value != this.state.confirmedEmail){
            this.setState({
                emailError:true
            })
         }else{
            this.setState({
                emailError:false
            })
         }
     }

     change = e => {
         this.setState({
            [e.target.name]: e.target.value
         });
     }

    render(){
        return(

            <Card bg="Light" text="Dark">
                <Card.Header><h4>Registration</h4></Card.Header>
                <Card.Body>
                    <Card.Title><h3>Create My Account</h3></Card.Title>
                    <Form>        
                        <Form.Group controlId="first-name">
                            <Form.Label>First Name</Form.Label>
                            <Form.Control 
                                name = "firstName"
                                placeholder="First Name" 
                                value = {this.state.firstName}
                                onChange={e => this.change(e)}
                                required/>
                        </Form.Group>

                        <Form.Group controlId="last-name">
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control 
                                name = 'lastName'
                                placeholder="Last Name" 
                                value={this.state.lastName}
                                onChange={e => this.change(e)}
                                required/>
                        </Form.Group>
                        
                        <Form.Group controlId="npi-number">
                            <Form.Label>NPI Number</Form.Label>
                            <Form.Control 
                                name = 'npiNumber'
                                type="number" 
                                placeholder="NPI Number" 
                                min = '0' 
                                value={this.state.npiNumber}
                                onChange={e => this.change(e)}
                                onKeyDown = {this.preventDecimalsAndNegatives}
                                required/>
                        </Form.Group>

                        <Form.Group controlId="business-street-address">
                                <Form.Label>Business Street Address</Form.Label>
                                <Form.Control 
                                    name = "businessAddress"
                                    placeholder="Business Address" 
                                    value={this.state.businessAddress}
                                    onChange={e => this.change(e)}
                                    required/>
                        </Form.Group>

                        <Row> 
                            <Col lg={true}>
                                <Form.Group controlId="business-city">
                                    <Form.Label>City</Form.Label>
                                    <Form.Control 
                                        name = 'city'
                                        placeholder="City" 
                                        value={this.state.city}
                                        onChange={e => this.change(e)}
                                        required/>
                                </Form.Group>
                            </Col>
                            <Col lg={true}>
                                <Form.Group controlId="business-state">
                                    <Form.Label>State</Form.Label>
                                    <Form.Control as="select" 
                                        name = 'state'
                                        value={this.state.state} 
                                        onChange={e => this.change(e)}
                                        required>
                                            {this.states.map((option) => (
                                                <option key={option.abbreviation}>{option.name}</option>
                                            ))}
                                    </Form.Control> 
                                </Form.Group>
                            </Col>
                        </Row>
                        
                        <Form.Group controlId="phone-number">
                            <Form.Label>Telephone Number</Form.Label>
                            <Form.Control 
                                name = 'phoneNumber'
                                placeholder="###-###-####"  
                                value={this.state.phoneNumber}
                                required 
                                type="tel"
                                pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                                onChange={e => this.change(e)}
                                title="The phone number must be in the following format: ###-###-####"/>
                            <Form.Control.Feedback 
                                type="invalid">
                                Phone number must be in the following format: ###-###-####
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group controlId="email">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control 
                                type="email"
                                name = 'email' 
                                placeholder="Enter email" 
                                value={this.state.email}
                                onChange={e => this.change(e)}
                                onBlur = {e => this.validateEmail(e)}
                                isInvalid={this.state.emailError}
                                required/>
                        </Form.Group>

                        <Form.Group controlId="confirm-email">
                            <Form.Label>Confirm Email</Form.Label>
                            <Form.Control 
                                type="email" 
                                name = 'confirmedEmail'
                                placeholder="Enter Email" 
                                value={this.state.confirmedEmail}
                                onChange={e => this.change(e)}
                                onBlur = {e => this.validateEmail(e)}
                                isInvalid={this.state.emailError}
                                required/>
                        </Form.Group>

                        <Button variant="primary" type="submit" onClick={this.handleSubmit}>
                            Submit
                        </Button>

                    </Form>
                
                </Card.Body>
            </Card>          
           )
    }
}
