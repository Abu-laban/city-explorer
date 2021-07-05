import React, { Component } from 'react'
import ListGroup from 'react-bootstrap/ListGroup'

export default class DailyWeather extends Component {
    render() {
        return (
            <div>
                <ListGroup key={this.props.index}>
                    <ListGroup.Item variant="info">{this.props.date}  {this.props.description}</ListGroup.Item>
                </ListGroup>
            </div>
        )
    }
}
