import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Card, CardTitle } from 'react-materialize';
import { CSSTransitionGroup } from 'react-transition-group' 
import './Home.css'

const Item = (props) => (
    // <Col s={4} key={1}>
    //     <Card className = 'large' header={<CardTitle image={props.image} waves='light'/>}
    //         title={props.title}
    //         reveal={<p>{props.description}</p>}>
    //         <p><a href="#">This is a link</a></p>
    //     </Card>
    // </Col>
    <Row>
    <Col s={12} m={5}>
        <CardPanel className="teal lighten-4 black-text">
            <span>I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively. I am similar to what is called a panel in other frameworks.</span>
        </CardPanel>
    </Col>
    <Col s={12} m={7}>
        For a simpler card with less markup, try using a card panel which just has padding and a shadow effect
    </Col>
</Row>
)

export default Item;