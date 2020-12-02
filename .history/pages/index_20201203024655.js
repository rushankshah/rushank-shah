import BaseLayout from '../components/layouts/BaseLayout'
import { Row, Col, Container } from 'reactstrap'
import Typed from 'react-typed'
import { useEffect, useState } from 'react'
import Link from 'next/link'

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
          <img src="/static/images/background-index.png" />
        </div>

        <Container>
          <Row>
            <Col md="6">
              <div className="hero-section">
                <div className={`flipper ${isFlipping ? 'isFlipping' : ''}`}>
                  <div className="front">
                    <div className="hero-section-content">
                      <h2> Hello World! </h2>
                      <div className="hero-section-content-intro">
                        Have a look at my portfolio!
                    </div>
                    </div>
                    <img className="image" src="/static/images/section-1.png" />
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
                    <img className="image" src="/static/images/section-2.png" />
                    <div className="shadow-custom shadow-custom-2">
                      <div className="shadow-inner"> </div>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
            <Col md="6" className="hero-welcome-wrapper">
              <div className="hero-welcome-text">
                <h1>
                  नमस्ते! I am <strong>Rushank Shah</strong>.
            </h1>
              </div>
              <Typed
                strings={
                  ['Flutter Enthusiast', 'MERN Stack', 'Arduino', 'Robotics and Automation', 'Developer', 'Tech Lover']
                }
                typeSpeed={60}
                backSpeed={50}
                loop
                className='self-typed'
              />
              <div className="hero-welcome-bio">
                <h1>
                  Happy to have you on board. You can read more about me <Link href='/about'><a>here</a></Link>.
                </h1>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </BaseLayout>

  )
}
