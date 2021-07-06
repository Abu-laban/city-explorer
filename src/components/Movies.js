import React, { Component } from 'react'
import { ListGroup, Accordion, Card, Button, Row, Col, ListGroupItem } from 'react-bootstrap'

export default class Movies extends Component {
    render() {
        return (
            <div>
                <>
                    <Accordion defaultActiveKey="1">
                        <Card>
                            <Card.Header>
                                <Accordion.Toggle as={Button} variant="info" eventKey="0">
                                    View Movies
                                </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="0">
                                <Card.Body>
                                    <Row xs={1} md={2} className="g-4">
                                        {this.props.movies.map((value, idx) => (
                                            <Col>
                                                <Card key={idx}>
                                                    <Card.Img variant="top" src={value.image_url} />
                                                    <Card.Body>
                                                        <Card.Title>{value.title}</Card.Title>
                                                        <Card.Text>
                                                            {value.overview}
                                                        </Card.Text>
                                                    </Card.Body>
                                                    <ListGroup className="list-group-flush">
                                                        <ListGroupItem>Average Votes: {value.average_votes}</ListGroupItem>
                                                        <ListGroupItem>Total Votes: {value.total_votes}</ListGroupItem>
                                                        <ListGroupItem>Popularity: {value.popularity}</ListGroupItem>
                                                        <ListGroupItem>Released On: {value.released_on}</ListGroupItem>
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
