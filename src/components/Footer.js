import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container'

export default class Footer extends Component {
    render() {
        return (
            <div>
                <Container>
                    <p>Author: Tariq Abu-Laban</p>
                </Container>
            </div>
        )
    }
}
