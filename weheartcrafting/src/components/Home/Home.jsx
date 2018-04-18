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
            transitionAppearTimeout={800}
            transitionEnter={false}
            transitionLeave={false}>
                <div>
                    {
                        props.shoppingItems.map((item, index) => (
                           <Col s={4} key={index}>
                                <Link to={{ pathname: `/items/${item._id}`, state: {item: item} }}>
                                    <Card className = 'large' header={<CardTitle image={require("./../../assets/images/cactus.jpg")} waves='light'/>}
                                        title={item.title}
                                        reveal={<p>{item.description}</p>}>
                                        <p><a href="#">This is a link</a></p>
                                    </Card>
                                </Link>
                            </Col> 
                        ))
                    }
                </div>
            </CSSTransitionGroup>
        </Row>
    );
}

export default Home;
