import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

import DailyWeather from './DailyWeather'

export default class Weather extends Component {
    render() {
        return (
            <div>
                {this.props.weather.map((element, index) => (
                    <DailyWeather key={index} date={element.date} description={element.des} />
                ))}
            </div>
        )
    }
}
