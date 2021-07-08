import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Alert from 'react-bootstrap/Alert'
import Map from './Map.js';
import Weather from './Weather.js';
import Movies from './Movies.js';
import Yelp from './Yelp.js';

export default class Main extends Component {

    constructor(props) {
        super(props);
        this.state = {
            location: {},
            searchQuery: '',
            imgSrc: '',
            lon: '',
            lat: '',
            displayResults: false,
            errorAlert: false,
            weatherArray: [],
            movieArray: [],
            yelpArray: [],
        }
    }

    getLocationInfo = async (e) => {
        e.preventDefault();

        let url = `https://eu1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_City_Explorer_Access_Token}&q=${this.state.searchQuery}&format=json`;
        try {
            let locations = await axios.get(url);
            let locationArray = locations.data;
            this.setState({
                location: locationArray[0],
                lon: locationArray[0].lon,
                lat: locationArray[0].lat,
                displayResults: true,
                errorAlert: false,
                imgSrc: `https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_City_Explorer_Access_Token}&center=${locationArray[0].lat},${locationArray[0].lon}&zoom=17`,

            });
            this.getWeather();

            this.getMovie();

            this.getYelp();
        }
        catch (error) {
            console.log(`💢 Axios request failed: ${error}`);
            this.setState({
                errorAlert: true,
                displayResults: false,
            })
        }
    }

    getWeather = async () => {
        try {
            const weather = await axios.get(`${process.env.REACT_APP_SERVER}/weather?cityName=${this.state.searchQuery.charAt(0).toUpperCase() + this.state.searchQuery.slice(1)}`);

            this.setState({
                weatherArray: weather.data,
                displayResults: true
            });

        } catch (error) {
            console.log(`💢 Axios request failed: ${error}`);
            this.setState({
                errorAlert: true,
                displayResults: false,
            })
        }
    }

    getMovie = async () => {
        try {
            const movies = await axios.get(`${process.env.REACT_APP_SERVER}/movies?cityName=${this.state.searchQuery.charAt(0).toUpperCase() + this.state.searchQuery.slice(1)}`);

            this.setState({
                movieArray: movies.data,
                displayResults: true
            });

        } catch (error) {
            console.log(`💢 Axios request failed: ${error}`);
            this.setState({
                errorAlert: true,
                displayResults: false,
            })
        }
    }

    getYelp = async () => {
        try {
            const yelps = await axios.get(`${process.env.REACT_APP_SERVER}/yelp?cityName=${this.state.searchQuery}`);

            this.setState({
                yelpArray: yelps.data,
                displayResults: true
            });

            console.log(this.state.yelpArray);

        } catch (error) {
            console.log(`💢 Axios request failed: ${error}`);
            this.setState({
                errorAlert: true,
                displayResults: false,
            })
        }
    }

    render() {
        return (
            <div>
                <Container>
                    <Col>
                        <Form onSubmit={this.getLocationInfo}>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>City Name</Form.Label>
                                <Form.Control type="text" placeholder="city name" onChange={(e) => this.setState({ searchQuery: e.target.value })} />
                                <Form.Text className="text-muted">
                                    Enter a valid location in the input.
                                </Form.Text>
                            </Form.Group>
                            <Button variant="outline-primary" type="submit">
                                🔍 Explore!
                            </Button>
                        </Form>
                    </Col>
                </Container>
                <Container>
                    <Col>
                        {this.state.displayResults &&
                            <Map
                                displayName={this.state.location.display_name}
                                longitude={this.state.lon}
                                latitude={this.state.lat}
                                imgSrc={this.state.imgSrc}
                            />
                        }
                    </Col>
                    <Col>
                        {this.state.displayResults &&
                            <Weather weather={this.state.weatherArray} />
                        }
                    </Col>
                    <Col>
                        {this.state.displayResults &&
                            <Movies movies={this.state.movieArray} />
                        }
                    </Col>
                    <Col>
                        {this.state.displayResults &&
                            <Yelp yelp={this.state.yelpArray} />
                        }
                    </Col>
                </Container>
                <Container>
                    <Col>{this.state.errorAlert &&
                        <Alert variant='danger'>
                            This is a alert—check it out!
                            💢 Axios request failed
                        </Alert>
                    }
                    </Col>
                </Container>

            </div>
        )
    }
}
