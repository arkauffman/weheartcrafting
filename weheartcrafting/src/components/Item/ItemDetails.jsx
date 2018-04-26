import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Card, CardTitle, CardPanel, Button, Input } from 'react-materialize';
import { CSSTransitionGroup } from 'react-transition-group' 

const ItemDetails = (props) => {
        const { item } = props.location.state;
    console.log('item', item)
    return (
        // <Col s={4}>
        //     <Card className = 'medium' header={<CardTitle image={item.image} waves='light'/>}
        //         title={item.title}
        //         reveal={<p>{item.description}</p>}>
        //     </Card>
        // </Col>
        <Row>
            <Col s={12} m={6}>
                <img src={item.image} className="show-images"/>
            </Col>
            <Col s={12} m={5} className="description">
                <CardPanel className="teal lighten-4 black-text">
                    <span>
                        About me:
                        <br /><br />
                        This lovely pouf was handcrafted by yours truly. It was made with love and with a passion
                        for art and crafting. We hope you enjoy it and that it livens up your home. It's even
                        a great gift for a loved one!
                    </span>
                    <br />
                    <span>
                        <Row>
                            <Input s={12} type='select' label="Colors" defaultValue='Red'>
                                <option value='Red'>Red</option>
                                <option value='Orange'>Orange</option>
                                <option value='Yellow'>Yellow</option>
                                <option value='Green'>Green</option>
                                <option value='Blue'>Blue</option>
                                <option value='Purple'>Purple</option>
                                <option value='Black'>Black</option>
                            </Input>
                        </Row>
                    </span>
                    <span>
                        <Row>
                            <Input s={12} type='select' label="Size" defaultValue='Small'>
                                <option value='Small'>Small</option>
                                <option value='Medium'>Medium</option>
                                <option value='Large'>Large</option>
                            </Input>
                        </Row>
                    </span>
                    <span>
                        <Row>
                            <Input s={12} type='select' label="Quantity" defaultValue='1'>
                                <option value='1'>1</option>
                                <option value='2'>2</option>
                                <option value='3'>3</option>
                            </Input>
                        </Row>
                        <Button waves='light'>Add to Cart</Button>
                    </span>
                </CardPanel>
            </Col>
        </Row>
    )
}

export default ItemDetails;