import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Card, CardTitle } from 'react-materialize';
import { CSSTransitionGroup } from 'react-transition-group' 
import './Home.css'

const Home = (props) => {
    return (
        <Row>
            <CSSTransitionGroup
            transitionAppear={true}
            transitionName="example"
            transitionAppear={true}
            transitionAppearTimeout={800}
            transitionEnter={false}
            transitionLeave={false}>
                {/* <Col s={4} key={1}>
                    <Card className = 'large' header={<CardTitle image={require("./../assets/images/cactus.jpg")} waves='light'/>}
                        title="Card Title"
                        reveal={<p>Here is some more information about this product that is only revealed once clicked on.</p>}>
                        <p><a href="#">This is a link</a></p>
                    </Card>
                </Col>
                <Col s={4} key={2}>    
                    <Card className = 'large' header={<CardTitle image={require("./../assets/images/flowers.jpg")} waves='light'/>}
                        title="Card Title"
                        reveal={<p>Here is some more information about this product that is only revealed once clicked on.</p>}>
                        <p><a href="#">This is a link</a></p>
                    </Card>
                </Col>
                <Col s={4} key={3}>
                    <Card className = 'large' header={<CardTitle image={require("./../assets/images/model.jpg")} waves='light'/>}
                        title="Card Title"
                        reveal={<p>Here is some more information about this product that is only revealed once clicked on.</p>}>
                        <p><a href="#">This is a link</a></p>
                    </Card>
                </Col> */}
            </CSSTransitionGroup>
        </Row>
    );
}

export default Home;
