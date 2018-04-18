import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Card, CardTitle } from 'react-materialize';
import { CSSTransitionGroup } from 'react-transition-group' 
import './Home.css'

const Item = (props) => (
    <Col s={4} key={1}>
        <Card className = 'large' header={<CardTitle image={props.image} waves='light'/>}
            title={props.title}
            reveal={<p>{props.description}</p>}>
            <p><a href="#">This is a link</a></p>
        </Card>
    </Col>
)

export default Item;