import React from 'react';
import { Card, CardText } from 'reactstrap';
import Loader from './loader';

const Comments = props => {

    if (props.commentIsLoading) {
        return <Loader />
    } else {

        return (
            props.dish.map(comment => {
                return (
                    <div key={comment.id}>
                        <Card style={{ padding: "40px", margin: "20px 0px", backgroundColor: "#fffffd" }}>
                            <CardText style={{ fontSize: "24px", fontWeight: "600", color: "orange" }}>
                                Ratings : {comment.rating}
                            </CardText>
                            <CardText style={{ fontStyle: "italic" }}>
                                Comment : "{comment.comment}"
                            </CardText>
                            <CardText style={{ fontSize: "24px", fontWeight: "700" }}>
                                - {comment.author}
                            </CardText>
                            <CardText>
                                {comment.date}
                            </CardText>
                        </Card>
                    </div>
                )
            })
        )
    }
}

export default Comments;