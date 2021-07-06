import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Accordion, Card, Button } from 'react-bootstrap'
import DailyWeather from './DailyWeather'

export default class Weather extends Component {
    render() {
        return (
            <div>
                <>
                    <Accordion defaultActiveKey="1">
                        <Card>
                            <Card.Header>
                                <Accordion.Toggle as={Button} variant="info" eventKey="0">
                                    View Weather Forecast
                                </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="0">
                                <Card.Body>
                                    {this.props.weather.map((element, index) => (
                                        <DailyWeather key={index} date={element.date} description={element.des} />
                                    ))}
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                    </Accordion>
                </>
            </div>
        )
    }
}
