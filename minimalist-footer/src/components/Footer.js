import React from 'react';
import { Row, Container, Col,Button } from 'react-bootstrap';
import './Footer.css';

function Footer() {
    return (
        <div className="footer-1">
            <Container className="data">
                <Row>
                    <Col>
                        <Col>
                            I design basic website like this.
                        </Col>

                        <Col>
                            <Button variant="success" className="button">
                                About
                            </Button>
                        </Col>

                    </Col>

                    <Col>
                        <div className="heading-1">
                            SHARE
                        </div>
                        <div className="items">
                        <Col>
                            Twitter
                        </Col>
                        <Col>
                            Facebook
                        </Col>
                        <Col>
                            LinkedIn
                        </Col>

                        </div>

                    </Col>
                    <Col>
                        <div className="heading-2">
                            LEGAL
                        </div>
                       <div className="items-2">
                       <Col>
                            Terms
                        </Col>
                        <Col>
                            Privacy
                        </Col>
                        <Col>
                            Guidelines
                        </Col>
                       </div>

                    </Col>

                </Row>
            </Container>

            <div className="text-1">
                Website made by: Nimrat Kaur | @2021 All rights reserved.
            </div>
        </div>
    )
}

export default Footer;
