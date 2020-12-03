import { Col, Row } from "reactstrap";

export default function Footer() {
    return (
        <div>
            <div className='intro'>
                <h5 className='title' style={{ textAlign: 'center', color: 'black' }}>
                    Feel free to connect
                </h5>
                <h5 className='subtitle' style={{ textAlign: 'center', color: 'black' }}>
                    <a target='_blank' style={{ color: 'black', textDecoration: 'none' }} href='mailto:rushankshah65@gmail.com'>
                        <i className="lni lni-envelope lni-lg lni-32 social-media"> rushankshah65@gmail.com</i>
                    </a>
                </h5>
                <Row className='mt-3' style={{ textAlign: 'center', color: 'black' }}>
                    <Col>
                    </Col>
                    <Col md='8'>
                        <Row>
                            <Col md='2'>
                                <div>
                                    <a target='_blank' style={{ color: 'black', textDecoration: 'none' }} href='https://www.linkedin.com/in/rushank-shah-65836b1a6/'>
                                        <i className="lni lni-linkedin-original lni-lg lni-32 social-media">LinkedIn</i>
                                    </a>
                                </div>
                            </Col>
                            <Col md='2'>
                                <div>
                                    <a target='_blank' style={{ color: 'black', textDecoration: 'none' }} href='https://www.instagram.com/rushankshah65/'>
                                        <i className="lni lni-instagram lni-lg lni-32 social-media">Instagram</i>
                                    </a>
                                </div>
                            </Col>
                            <Col md='2'>
                                <div>
                                    <a target='_blank' style={{ color: 'black', textDecoration: 'none' }} href='https://github.com/rushankshah'>
                                        <i className="lni lni-github-original lni-lg lni-32 social-media">GitHub</i>
                                    </a>
                                </div>
                            </Col>
                            <Col md='2'>
                                <div>
                                    <a target='_blank' style={{ color: 'black', textDecoration: 'none' }} href='https://twitter.com/ShahRushank'>
                                        <i className="lni lni-twitter-original lni-lg lni-32 social-media">Twitter</i>
                                    </a>
                                </div>
                            </Col>
                            <Col md='2'>
                                <div>
                                    <a target='_blank' style={{ color: 'black', textDecoration: 'none' }} href='https://dev.to/rushankshah'>
                                        <i class="lni lni-dev lni-lg lni-32 social-media">Dev</i>
                                    </a>
                                </div>
                            </Col>
                            <Col md='2'>
                                <div>
                                    <a target='_blank' style={{ color: 'black', textDecoration: 'none' }} href='https://rushankshah65.medium.com/'>
                                        <i class="lni lni-medium lni-lg lni-32 social-media">Medium</i>
                                    </a>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                    <Col>
                    </Col>
                </Row>
                <Row className='mt-3'>
                </Row>
            </div>
        </div>
    )
}
