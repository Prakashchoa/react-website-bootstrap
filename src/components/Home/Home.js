import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Jumbotron, Grid, Row, Col, Image, Button } from 'react-bootstrap';
import './Home.css';

class Home extends Component {
    render() {
        return(
            <div>
                <Grid>
                    <Jumbotron>
                        <h2>Welcome to My Prakash page</h2>
                        <p>To build the website using React, React-Router and React-Bootstrap</p>
                        <Link to="/about">
                            <Button bsStyle="primary">About</Button>
                        </Link>
                    </Jumbotron>
                    <Row className="show-gird text-center">
                        <Col xs={12} sm={4} className="person-wrpper">
                            <Image src="assets/img0.jpg" circle className="profile-pic" />
                            <h3>NATURE: THE MOST POWERFUL HEALER</h3>
                            <p>If every morning you wake up and have your morning tea in your verandah, feeling those light winds touching your face, I bet your each day would flow so smoothly that you will hardly be any tired by the evening.</p>
                        </Col>
                        <Col xs={12} sm={4} className="person-wrpper">
                            <Image src="assets/img1.jpg" circle className="profile-pic" />
                            <h3>Wild Animals</h3>
                            <p>Protecting animals from illegal wildlife trade is one of their many projects, which also include efforts to prevent animal cruelty and rescue individual animals.</p>
                        </Col>
                        <Col xs={12} sm={4} className="person-wrpper">
                            <Image src="assets/img2.jpg" circle className="profile-pic" />
                            <h3>Fire</h3>
                            <p>We confirm that a fire broke out at one of Jabong’s warehouses in Pataudi in Haryana on late Monday night. According to our information, no employees were injured, which is of utmost importance for the company as the health and safety of our employees is our key priority,” a Jabong spokesperson said. “Jabong will continue to conduct business normally, subject to some temporary delays or fulfilment issues which could be encountered for some product categories. As India’s online fashion leader, we will continue to provide our customers with excellent service and are confident that our customers will bear with us till we return to normalcy.</p>
                        </Col>
                    </Row>                    
                </Grid>
            </div>
        )
    }
}

export default Home;