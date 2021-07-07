import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card'
import Accordion from 'react-bootstrap/Accordion'
import Button from 'react-bootstrap/Button'

export default class Map extends Component {
    render() {
        return (
            <div>
                <Accordion defaultActiveKey="1">
                    <Card>
                        <Card.Header as="h5">
                            <Accordion.Toggle as={Button} variant="info" eventKey="0">
                                City location
                            </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="0">
                            <Card.Body>
                                <Card.Title>{this.props.displayName} </Card.Title>
                                <Card.Text>
                                    <p>Longitude: {this.props.longitude}</p>
                                    <p>Latitude: {this.props.latitude}</p>
                                </Card.Text>
                                <Card.Img variant="bottom" src={this.props.imgSrc} />
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                </Accordion>
            </div>
        )
    }
}
