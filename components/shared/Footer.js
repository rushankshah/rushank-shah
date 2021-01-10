import { Slide, Zoom } from "react-awesome-reveal";
import { Col, Row } from "reactstrap";

export default function Footer() {
    return (
        <div>
            <div className='intro'>
                <Zoom>
                    <h5 className='title' style={{ textAlign: 'center', color: 'black' }}>
                        Let's connect!
                    </h5>
                </Zoom>
                <Slide direction='left'>
                    <h5 style={{ textAlign: 'center', color: 'black' }}>
                        <a target='_blank' style={{ color: 'black', textDecoration: 'none' }} href='mailto:rushankshah65@gmail.com'>
                            <i className="lni lni-envelope lni-lg lni-25 social-media">rushankshah65@gmail.com</i>
                        </a>
                    </h5>
                </Slide>
                <Slide direction='right'>
                    <Row className='mt-3' style={{ textAlign: 'center', color: 'black' }}>
                        <Col md='12'>
                            <Row>
                                <Col md='2'>
                                    <div>
                                        <a target='_blank' style={{ color: 'black', textDecoration: 'none' }} href='https://www.linkedin.com/in/rushankshah65/'>
                                            <i className="lni lni-linkedin-original lni-lg lni-25 social-media">LinkedIn</i>
                                        </a>
                                    </div>
                                </Col>
                                <Col md='2'>
                                    <div>
                                        <a target='_blank' style={{ color: 'black', textDecoration: 'none' }} href='https://www.instagram.com/rushankshah65/'>
                                            <i className="lni lni-instagram lni-lg lni-25 social-media">Instagram</i>
                                        </a>
                                    </div>
                                </Col>
                                <Col md='2'>
                                    <div>
                                        <a target='_blank' style={{ color: 'black', textDecoration: 'none' }} href='https://github.com/rushankshah'>
                                            <i className="lni lni-github-original lni-lg lni-25 social-media">GitHub</i>
                                        </a>
                                    </div>
                                </Col>
                                <Col md='2'>
                                    <div>
                                        <a target='_blank' style={{ color: 'black', textDecoration: 'none' }} href='https://twitter.com/ShahRushank'>
                                            <i className="lni lni-twitter-original lni-lg lni-25 social-media">Twitter</i>
                                        </a>
                                    </div>
                                </Col>
                                <Col md='2'>
                                    <div>
                                        <a target='_blank' style={{ color: 'black', textDecoration: 'none' }} href='https://dev.to/rushankshah'>
                                            <i className="lni lni-dev lni-lg lni-25 social-media">Dev</i>
                                        </a>
                                    </div>
                                </Col>
                                <Col md='2'>
                                    <div>
                                        <a target='_blank' style={{ color: 'black', textDecoration: 'none' }} href='https://rushankshah65.medium.com/'>
                                            <i className="lni lni-medium lni-lg lni-25 social-media">Medium</i>
                                        </a>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Slide>
                <Row className='mt-3'>
                </Row>
            </div>
        </div>
    )
}
