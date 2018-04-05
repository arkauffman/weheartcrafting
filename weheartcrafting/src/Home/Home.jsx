import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Card, CardTitle } from 'react-materialize';

const Home = () => (
    <Row>
        <Col s={4} className='grid-example'>
            <Card className = 'large' header={<CardTitle image={require("./../assets/images/cactus.jpg")} waves='light'/>}
                title="Card Title"
                reveal={<p>Here is some more information about this product that is only revealed once clicked on.</p>}>
                <p><a href="#">This is a link</a></p>
            </Card>
        </Col>
        <Col s={4} className='grid-example'>    
            <Card className = 'large' header={<CardTitle image={require("./../assets/images/flowers.jpg")} waves='light'/>}
                title="Card Title"
                reveal={<p>Here is some more information about this product that is only revealed once clicked on.</p>}>
                <p><a href="#">This is a link</a></p>
            </Card>
        </Col>
        <Col s={4} className='grid-example'>
            <Card className = 'large' header={<CardTitle image={require("./../assets/images/model.jpg")} waves='light'/>}
                title="Card Title"
                reveal={<p>Here is some more information about this product that is only revealed once clicked on.</p>}>
                <p><a href="#">This is a link</a></p>
            </Card>
        </Col>
    </Row>
);

export default Home;
