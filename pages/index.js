import BaseLayout from '../components/layouts/BaseLayout'
import { Row, Col, Container } from 'reactstrap'
import Typed from 'react-typed'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import { Flip, JackInTheBox, Zoom } from 'react-awesome-reveal'
import ReactTooltip from 'react-tooltip'
import CustomCursor from '../components/shared/CustomCursor'

export default function Home() {

  const [isFlipping, setIsFlipping] = useState(false)

  var cardAnimationInterval;

  useEffect(() => {
    animateCard()
  })

  useEffect(() => {
    return () => {
      cardAnimationInterval && clearInterval(cardAnimationInterval)
    }
  })

  const animateCard = () => {
    cardAnimationInterval = setInterval(() => {
      setIsFlipping((prevVal) => !prevVal)
    }, 5000)
  }

  return (
    <BaseLayout className={`cover ${isFlipping ? 'cover-1' : 'cover-0'}`} headerType='index'>
      <div className="main-section">
        <div className="background-image">
          <img src="/static/images/background-index.png" alt="Background Image"/>
        </div>
        <CustomCursor />
        <Container>
          <Row>
            <Col md="6">
              <Flip>
                <JackInTheBox>
                  <div className="hero-section">
                    <div className={`flipper ${isFlipping ? 'isFlipping' : ''}`}>
                      <div className="front">
                        <div className="hero-section-content">
                          <h2> Hello World! </h2>
                          <div className="hero-section-content-intro">
                            Have a look at my portfolio!
                          </div>
                        </div>
                        <img className="image" src="/static/images/section-1.png" alt='Section 1'/>
                        <div className="shadow-custom">
                          <div className="shadow-inner"> </div>
                        </div>
                      </div>
                      <div className="back">
                        <div className="hero-section-content">
                          <h2> An Enthusiast Developer </h2>
                          <div className="hero-section-content-intro">
                            Open for collaborations
                        </div>
                        </div>
                        <img className="image" src="/static/images/section-2.png" alt='Section 2'/>
                        <div className="shadow-custom shadow-custom-2">
                          <div className="shadow-inner"> </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </JackInTheBox>
              </Flip>
            </Col>
            <Col md="6" className="hero-welcome-wrapper">
              <Zoom direction='left'>
                <div className="hero-welcome-text">
                  <h1 style={{ textAlign: 'center' }}>
                    <span data-tip data-for='namaste' className='namaste'>नमस्ते</span>! I am <strong data-tip data-for='rushankShah' className='my-name'>Rushank Shah</strong>.
                    <ReactTooltip id='rushankShah' backgroundColor='black'>
                      <span>Rushank means <strong>Lord shiva</strong></span>
                    </ReactTooltip>
                    <ReactTooltip id='namaste' backgroundColor='black'>
                      <span>Namaste means <strong>Hello</strong> in Hindi</span>
                    </ReactTooltip>
                  </h1>
                </div>
              </Zoom>
              <div style={{ textAlign: 'center' }}>
                <Typed
                  strings={
                    ['Flutter Enthusiast', 'ReactJS', 'Arduino', 'Robotics and Automation', 'Developer', 'Tech Lover']
                  }
                  typeSpeed={60}
                  backSpeed={50}
                  loop
                  className='self-typed'
                />
              </div>
              <Zoom direction='right'>
                <div className="hero-welcome-bio">
                  <h1 style={{ textAlign: 'center' }}>
                    Happy to have you on board🥳.<br></br> You can read more about me <Link href='/about'><a style={{ textDecoration: 'none' }} className='here'><i>here</i></a></Link>.
                  </h1>
                </div>
              </Zoom>
            </Col>
          </Row>
        </Container>
      </div>
    </BaseLayout>

  )
}
