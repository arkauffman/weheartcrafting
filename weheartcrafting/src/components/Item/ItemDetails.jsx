import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Card, CardTitle } from 'react-materialize';
import { CSSTransitionGroup } from 'react-transition-group' 

const ItemDetails = (props) => {
        const { item } = props.location.state;
    console.log('item', item)
    return (
        <Col s={4}>
            <Card className = 'medium' header={<CardTitle image={item.image} waves='light'/>}
                title={item.title}
                reveal={<p>{item.description}</p>}>
            </Card>
        </Col>
    )
}

export default ItemDetails;