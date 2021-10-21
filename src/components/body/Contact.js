import axios from 'axios';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actions, Control, Errors, Form } from 'react-redux-form';
import { Alert, Col, FormGroup, Input, Label } from 'reactstrap';

const mapDispatchToProps = dispatch => {
    return {
        resetFeedbackForm: () => {
            dispatch(actions.reset('feedback'))
        }
    }
}

const required = val => val && val.length;
const isNumber = val => !isNaN(Number(val));
const validEmail = val => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);

class Contact extends Component {

    state = {
        showAlert: false,
        color: null,
        alertText: null
    }

    handleSubmit = values => {
        axios.post("http://localhost:3004/feedback", values)
            .then(response => response.status)
            .then(status => {
                if (status != 404) {
                    this.setState({
                        showAlert: true,
                        color: "success",
                        alertText: "Success!"
                    })
                }
            })
            .catch(err => {
                this.setState({
                    showAlert: true,
                    color: "danger",
                    alertText: "Error!"
                })

                setTimeout(() => {
                    this.setState({
                        showAlert: false
                    })
                }, 5000)
            })
        this.props.resetFeedbackForm();
    }

    render() {
        document.title = 'Contact | Rajmohol Restaurant'
        return (
            <div>
                <div className="container pt-5 pb-5">
                    <div><Alert isOpen={this.state.showAlert} color={this.state.color}>{this.state.alertText}</Alert></div>
                    <h4>Send your feedback</h4>
                    <div className="row text-left">
                        <div className="col-lg-12">
                            <Form model="feedback" onSubmit={this.handleSubmit}>
                                <FormGroup row>
                                    <Label htmlFor="firstName" lg={2}>First Name</Label>
                                    <Col lg={10}>
                                        <Control.text
                                            model=".firstname"
                                            placeholder="Enter your first name"
                                            name="firstName"
                                            className="form-control"
                                            validators={{
                                                required
                                            }}
                                        />
                                        <Errors
                                            model='.firstname'
                                            className='text-danger'
                                            show='touched'
                                            messages={{
                                                required: 'Required '
                                            }}
                                        />
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label htmlFor="lastName" lg={2}>Last Name</Label>
                                    <Col lg={10}>
                                        <Control.text
                                            model=".lastname"
                                            placeholder="Enter your last name"
                                            name="lastName"
                                            className="form-control"
                                            validators={{
                                                required
                                            }}
                                        />
                                        <Errors
                                            model='.lastname'
                                            className='text-danger'
                                            show='touched'
                                            messages={{
                                                required: 'Required '
                                            }}
                                        />
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label htmlFor="phoneNum" lg={2}>Phone</Label>
                                    <Col lg={10}>
                                        <Control.text
                                            model=".phoneNum"
                                            placeholder="Enter your phone number"
                                            name="phoneNum"
                                            className="form-control"
                                            validators={{
                                                isNumber
                                            }}
                                        />
                                        <Errors
                                            model='.phoneNum'
                                            className='text-danger'
                                            show='touched'
                                            messages={{
                                                isNumber: 'Invalid Number'
                                            }}
                                        />
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label htmlFor="email" lg={2}>Email</Label>
                                    <Col lg={10}>
                                        <Control.text
                                            model=".email"
                                            placeholder="Enter your email"
                                            name="email"
                                            className="form-control"
                                            validators={{
                                                validEmail
                                            }}
                                        />
                                        <Errors
                                            model='.email'
                                            className='text-danger'
                                            show='touched'
                                            messages={{
                                                validEmail: 'Invalid Email'
                                            }}
                                        />
                                    </Col>
                                </FormGroup>
                                <FormGroup row >
                                    <Col md={{ size: 6 }} lg={{ size: 4, offset: 2 }}>
                                        <FormGroup check>
                                            <Label check>
                                                <Control.checkbox
                                                    model=".agree"
                                                    name="agree"
                                                    className="form-check-input" />
                                                <span>Agree To Our Terms and Conditions</span>
                                            </Label>
                                        </FormGroup>
                                    </Col>
                                    <Col md={{ size: 6 }} lg={{ size: 4, offset: 2 }}>
                                        <FormGroup check className="pl-0">
                                            <Label check style={{ display: "block" }}>
                                                Way to contact
                                                <Control.select
                                                    model=".contactType"
                                                    name="contactType"
                                                    className="form-control">
                                                    <option>Tel.</option>
                                                    <option>Email</option>
                                                </Control.select>
                                            </Label>
                                        </FormGroup>
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label lg={2}>Your Feedback</Label>
                                    <Col lg={10}>
                                        <Control.textarea
                                            model=".message"
                                            name="message"
                                            className="form-control"
                                            validators={{
                                                required,
                                            }}
                                        />
                                        <Errors
                                            model='.message'
                                            className='text-danger'
                                            show='touched'
                                            messages={{
                                                required: 'Required ',
                                            }}
                                        />
                                    </Col>
                                </FormGroup>
                                <FormGroup>
                                    <Col lg={{ size: 10, offset: 2 }} className="text-center pl-0 pr-0">
                                        <Input
                                            type="submit"
                                            className="btn btn-dark btn-block"
                                            value="Submit" />
                                    </Col>
                                </FormGroup>
                            </Form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default connect(null, mapDispatchToProps)(Contact);