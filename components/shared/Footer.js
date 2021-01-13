import { Bounce, Zoom } from "react-awesome-reveal";
import { Row } from "reactstrap";

export default function Footer() {
    return (
        <div>
            <div className='intro'>
                <Zoom>
                    <h5 className='title' style={{ textAlign: 'center', color: 'black' }}>
                        Let's connect!
                    </h5>
                </Zoom>
                <Bounce>
                    <div className='footer-social-icons'>
                        <div>
                            <a target='_blank' style={{ color: 'black', textDecoration: 'none' }} href='mailto:rushankshah65@gmail.com'>
                                <img className='social-media' src='https://www.vectorlogo.zone/logos/gmail/gmail-icon.svg' />
                            </a>
                        </div>
                        <div>
                            <a target='_blank' style={{ color: 'black', textDecoration: 'none' }} href='https://www.linkedin.com/in/rushankshah65/'>
                                <img className='social-media' src='https://www.vectorlogo.zone/logos/linkedin/linkedin-tile.svg' />
                            </a>
                        </div>
                        <div>
                            <a target='_blank' style={{ color: 'black', textDecoration: 'none' }} href='https://www.instagram.com/rushankshah65/'>
                                <img className='social-media' src='https://www.vectorlogo.zone/logos/instagram/instagram-icon.svg' />
                            </a>
                        </div>
                        <div>
                            <a target='_blank' style={{ color: 'black', textDecoration: 'none' }} href='https://github.com/rushankshah'>
                                <img className='social-media' src='https://www.vectorlogo.zone/logos/github/github-tile.svg' />
                            </a>
                        </div>
                        <div>
                            <a target='_blank' style={{ color: 'black', textDecoration: 'none' }} href='https://twitter.com/ShahRushank'>
                                <img className='social-media' src='https://www.vectorlogo.zone/logos/twitter/twitter-icon.svg' />
                            </a>
                        </div>
                        <div>
                            <a target='_blank' style={{ color: 'black', textDecoration: 'none' }} href='https://rushankshah65.medium.com/'>
                                <img className='social-media' src='https://www.vectorlogo.zone/logos/medium/medium-icon.svg' />
                            </a>
                        </div>
                    </div>
                </Bounce>
                <Row className='mt-3'>
                </Row>
            </div>
        </div>
    )
}
