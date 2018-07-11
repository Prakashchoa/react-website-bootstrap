import React, { Component } from 'react';
import { Grid, Row, Col, Image } from 'react-bootstrap';
import "./News.css";


class Home extends Component {
    render() {
        return(
            <div>
                <Image src="assets/bike-img0.jpg" className="header-news-image" />
                <Grid>
                    <h3>Bikes</h3>
                    <Row>
                        <Col xs={12} sm={8} className="main-section">                        
                            <p>Nuno’s Scrambler is clear proof, were it needed, that a few carefully chosen mods can make a big visual and dynamic difference. With some classic block pattern Continental rubber, the essence of the bike has been exaggerated and brought to the fore, making you want to hop on and roost off down the track. There’ll be more to come from Spirit of the Seventies soon so watch these pages and be sure to keep an eye on their Facebook page.</p>
                            <p>The merely adequate braking system of the original bike received attention: an EBC disc, new Nissin caliper and braided lines give increased power and feel. The suspension had already received some attention from Nino, uprated sprung parts were an early addition to make the Capital’s rough roads navigable.</p>
                            <p>With the standard headlight removed, the ignition was relocated to the main downtube, easy to access and keeping the top yoke free from scratches. The Reg/Rec was also tucked up further out of the way for cleanliness.</p>
                        </Col>
                        <Col xs={12} sm={4}  className="sidebar-section">
                            <Image src="assets/bike-img1.jpeg" />                        
                            <p>It’s been a while since we’ve had a bike from Spirit of the Seventies on these pages. But with Norman Greenbaum back in the news today for unfortunate reasons, when this fettled Scrambler of theirs dropped into our inbox, it made us think about coincidences and the possibility of ‘him up there’ having a laugh at our expense.</p>
                            <p>Far from thumb twiddling, Kev and Tim have simply been flat out working on some extremely exciting projects; news of which will reach these shores in good time. Glimpses of neo-retro Speed Triples and other delicious looking parts and paint jobs have surfaced on their social media outlets and our feet are tapping in anticipation.</p>
                        </Col>
                    </Row>
                </Grid>
            </div>
        )
    }
}

export default Home;