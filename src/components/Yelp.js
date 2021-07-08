import React, { Component } from 'react'
import { ListGroup, Accordion, Card, Button, Row, Col, ListGroupItem } from 'react-bootstrap'

export default class Yelp extends Component {
    render() {
        return (
            <div>
                <>
                    <Accordion defaultActiveKey="1">
                        <Card>
                            <Card.Header>
                                <Accordion.Toggle as={Button} variant="info" eventKey="0">
                                    View Yelp
                                </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="0">
                                <Card.Body>
                                    <Row xs={1} md={2} className="g-4">
                                        {this.props.yelp.map((value, idx) => (
                                            <Col>
                                                <Card key={idx + value.name}>
                                                    <Card.Img variant="top" src={value.image_url} />
                                                    <Card.Body>
                                                        <Card.Title>{value.name}</Card.Title>
                                                    </Card.Body>
                                                    <ListGroup className="list-group-flush">
                                                        <ListGroupItem>Price: {value.price}</ListGroupItem>
                                                        <ListGroupItem>Rating: {value.rating}</ListGroupItem>
                                                        <ListGroupItem>URL : {value.url}</ListGroupItem>
                                                    </ListGroup>
                                                </Card>
                                            </Col>
                                        ))}
                                    </Row>
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                    </Accordion>

                </>
            </div>
        )
    }
}
