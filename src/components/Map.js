import React, { Component } from 'react'
import Card from 'react-bootstrap/Card'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container'

export default class Map extends Component {
    render() {
        return (
            <div>
                <Container>
                    <Card
                        bg='success'
                        text='white'
                        style={{ width: '18rem' }}
                        className="mb-2"
                    >
                        <Card.Header as="h5">City location</Card.Header>
                        <Card.Body>
                            <Card.Title>{this.props.displayName} </Card.Title>
                            <Card.Text>
                                <p>Longitude: {this.props.longitude}</p>
                                <p>Latitude: {this.props.latitude}</p>
                            </Card.Text>
                            <Card.Img variant="bottom" src={this.props.imgSrc} />
                        </Card.Body>
                    </Card>
                </Container>
            </div>
        )
    }
}
