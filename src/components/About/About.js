import React, { Component } from 'react';
import { Grid, Col, Image } from 'react-bootstrap';
import "./About.css";


class Home extends Component {
    render() {
        return(
            <div>  
                <Image src="assets/img-header0.jpg" className="header-image" />
                <Grid>
                    <Col xs={12} sm={8} smOffset={2}>
                        <Image src="assets/about-img0.jpeg" className="about-profile-pic" rounded />
                        <h3>NATURE: THE MOST POWERFUL HEALER</h3>
                        <p>If every morning you wake up and have your morning tea in your verandah, feeling those light winds touching your face, I bet your each day would flow so smoothly that you will hardly be any tired by the evening.</p>
                        <p>If every morning you wake up and have your morning tea in your verandah, feeling those light winds touching your face, I bet your each day would flow so smoothly that you will hardly be any tired by the evening.</p>
                        <p>If every morning you wake up and have your morning tea in your verandah, feeling those light winds touching your face, I bet your each day would flow so smoothly that you will hardly be any tired by the evening.</p>
                    </Col>
                </Grid>
            </div>
        )
    }
}

export default Home;