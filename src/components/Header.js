import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container'

export default class Header extends Component {
    render() {
        return (
            <div>
                <Container>
                    <h1>City Explorer</h1>
                </Container>
            </div>
        )
    }
}
