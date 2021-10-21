import React from 'react';
import { Badge, Card, CardBody, CardImg, CardText, CardTitle } from 'reactstrap';
import CommentForm from './CommentForm';
import Comments from './loadComments';

const DishDetails = props => {
    return (
        <div>
            <Card style={{
                textAlign: "left", marginBottom: "100px"
            }}>
                <CardImg src={'http://localhost:3001/'+ props.dish.image} alt={'http://localhost:3001/'+ props.dish.image} />
                <CardBody>
                    <CardTitle>
                        <h3>{props.dish.name} <Badge>{props.dish.label}</Badge></h3>
                    </CardTitle>
                    <CardText>Catagory : {props.dish.category}</CardText>
                    <CardText style={{ fontWeight: "bold", textTransform: "Capitalize", fontSize: "24px" }}>
                        Price : {props.dish.price}
                    </CardText>
                    <CardText>{props.dish.description}</CardText>
                </CardBody>
            </Card>
            <Comments 
            dish={props.comments} 
            commentIsLoading={props.commentIsLoading}/>

            <CommentForm 
            dishId={props.dish.id} 
            addComment={props.addComment} />
        </div>
    )
}

export default DishDetails
