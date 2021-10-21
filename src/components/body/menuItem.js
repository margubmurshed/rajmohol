import React from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';

const MenuItem = props => {
    if (props.dish == null) { return <div></div> }

    return (
        <div className="col-lg-6">
            <Card style={{ margin: "10px" }}>
                <CardImg width="100%" alt={'http://localhost:3001/'+ props.dish.image} src={'http://localhost:3001/'+ props.dish.image} />
                <CardImgOverlay style={{ backgroundColor: "#000", color: "#fff", opacity: "0.4" }} onClick={props.detailsShow}>
                    <CardTitle style={{ cursor: "pointer" }}><h3>{props.dish.name}</h3></CardTitle>
                </CardImgOverlay>
            </Card>
        </div>
    )
}

export default MenuItem;