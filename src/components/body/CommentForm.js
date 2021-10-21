import React, { Component } from 'react';
import { Button, Form, FormGroup, Input } from 'reactstrap';

class CommentForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            author: '',
            rating: 1,
            comment: '',
        }
    }

    handleInput = event => {
        const value = event.target.value;
        const name = event.target.name;
        this.setState({
            [name]: value
        })
    }

    handleSubmit = event => {
        this.props.addComment(this.props.dishId, this.state.author, this.state.rating, this.state.comment)
        this.setState({
            author: '',
            rating: 1,
            comment: '',
        })
        event.preventDefault();
    }

    render() {
        return (
            <div className="p-4" style={{ backgroundColor: '#ddd' }}>
                <h2 style={{ textAlign: "center" }}>Leave a review</h2>
                <Form onSubmit={this.handleSubmit}>
                    <FormGroup>
                        <Input
                            type="text"
                            name="author"
                            value={this.state.author} placeholder="Your name" required onChange={this.handleInput} />
                    </FormGroup>
                    <FormGroup>
                        <Input
                            type="select"
                            name="rating"
                            value={this.state.rating} onChange={this.handleInput} required>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </Input>
                    </FormGroup>
                    <FormGroup>
                        <Input type="textarea" name="comment" onChange={this.handleInput} value={this.state.comment} placeholder="Type your comment" required></Input>
                    </FormGroup>
                    <FormGroup>
                        <Button type="submit" value="Comment" style={{ width: "100%" }}>Comment</Button>
                    </FormGroup>
                </Form>
            </div>
        )
    }
}

export default CommentForm;