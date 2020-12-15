import BaseLayout from '../components/layouts/BaseLayout'
import BasePage from '../components/BasePage'
import { Card, CardBody, CardSubtitle, CardText, CardTitle, Col, Row } from 'reactstrap'
import { Bounce, Fade, Slide, Zoom } from 'react-awesome-reveal'

const about = () => {
    return (
        <BaseLayout>
            <BasePage className='about-page'>
                <Row className='mt-5'>
                    <Col md='6'>
                        <Fade direction='left'>
                            <div className='left-side'>
                                <h1 className='title'>
                                    नमस्ते!
                                </h1>
                                <h4 className='subtitle'>
                                    Feel Free to connect
                                </h4>
                                <img src='/static/images/profile.jpg' className='center' style={{ borderRadius: '20px', height: '275px' }}></img>
                            </div>
                        </Fade>
                    </Col>
                    <Col md='6'>
                        <Fade direction='right'>
                            <div className='fadein intro'>
                                <p>My name is <span style={{ fontWeight: 'bold' }}>Rushank Shah</span> and I am an experienced Developer and upcoming IT Engineer</p>
                                <p>I am currently pursuing my Bachelor's Degree from D.J. Sanghvi College of Engineering, Mumbai, India
                                and am experienced working on wide range of technologies and projects from C++ development for Arduino in Robotics
                                and Automation project to building modern and beautiful mobile and web apps using Flutter and React.
                                </p>
                                <p>
                                    I enjoy building up new Ideas and solutions to real life problems and devising feasible solutions to broadly relevant problems.
                                </p>
                            </div>
                        </Fade>
                    </Col>
                </Row>
                <hr></hr>
                <Zoom>
                    <h3 className='title' style={{ textAlign: 'center', color: 'black' }}>
                        Key Technical Skills
                    </h3>
                </Zoom>
                <Row className='mt-5'>
                    <Col md='3'>
                        <Fade direction='left'>
                            <div className='intro'>
                                <h5><b><u>Languages & databases</u></b></h5>
                                <ul>
                                    <li>
                                        <a href='https://www.java.com/en/' target='_blank' className='links'>Java</a>
                                    </li>
                                    <li>
                                        <a href='https://www.javascript.com/' target='_blank' className='links'>Javascript</a>
                                    </li>
                                    <li>
                                        <a href='https://dart.dev/' target='_blank' className='links'>Dart</a>
                                    </li>
                                    <li>
                                        <a href='https://en.wikipedia.org/wiki/C_%28programming_language%29' target='_blank' className='links'>C</a>
                                    </li>
                                    <li>
                                        <a href='https://en.wikipedia.org/wiki/C%2B%2B' target='_blank' className='links'>C++</a>
                                    </li>
                                    <li>
                                        <a href='https://www.python.org/' target='_blank' className='links'>Python</a>
                                    </li>
                                    <li>
                                        <a href='https://www.w3schools.com/html/html_intro.asp' target='_blank' className='links'>HTML</a>
                                    </li>
                                    <li>
                                        <a href='https://www.w3schools.com/Css/css_intro.asp' target='_blank' className='links'>CSS</a>
                                    </li>
                                    <li>
                                        <a href='https://www.tutorialspoint.com/sql/index.htm' target='_blank' className='links'>SQL</a>
                                    </li>
                                    <li>
                                        <a href='https://en.wikipedia.org/wiki/NoSQL' target='_blank' className='links'>NoSQL</a>
                                    </li>
                                </ul>
                            </div>
                        </Fade>
                    </Col>
                    <Col md='3'>
                        <Fade direction='bottom-left'>
                            <div className='intro'>
                                <h5>
                                    <b><u>Mobile, Web & Desktop Frameworks</u></b>
                                </h5>
                                <ul>
                                    <li>
                                        <a href='https://flutter.dev/' target='_blank' className='links'>Flutter</a>
                                    </li>
                                    <li>
                                        <a href='https://reactjs.org/' target='_blank' className='links'>ReactJS</a>
                                    </li>
                                    <li>
                                        <a href='https://nextjs.org/' target='_blank' className='links'>NextJS</a>
                                    </li>
                                    <li>
                                        <a href='https://nodejs.org/en/' target='_blank' className='links'>NodeJS</a>
                                    </li>
                                    <li>
                                        <a href='https://expressjs.com/' target='_blank' className='links'>ExpressJS</a>
                                    </li>
                                    <li>
                                        <a href='https://www.djangoproject.com/' target='_blank' className='links'>Django</a>
                                    </li>
                                    <li>
                                        <a href='https://openjfx.io/' target='_blank' className='links'>JavaFX</a>
                                    </li>
                                    <li>
                                        <a href='https://getbootstrap.com/' target='_blank' className='links'>Bootstrap</a>
                                    </li>
                                    <li>
                                        <a href='https://materializecss.com/' target='_blank' className='links'>MaterializeCSS</a>
                                    </li>
                                </ul>
                            </div>
                        </Fade>
                    </Col>
                    <Col md='3'>
                        <Fade direction='bottom-right'>
                            <div className='intro'>
                                <h5>
                                    <b><u>
                                        Software & Tools
                            </u></b>
                                </h5>
                                <ul>
                                    <li>
                                        <a href='https://git-scm.com/' target='_blank' className='links'>Git</a>
                                    </li>
                                    <li>
                                        <a href='https://github.com/' target='_blank' className='links'>GitHub</a>
                                    </li>
                                    <li>
                                        <a href='https://firebase.google.com/' target='_blank' className='links'>Firebase</a>
                                    </li>
                                    <li>
                                        <a href='https://www.mysql.com/' target='_blank' className='links'>MySQL</a>
                                    </li>
                                    <li>
                                        <a href='https://code.visualstudio.com/' target='_blank' className='links'>Visual Studio Code</a>
                                    </li>
                                    <li>
                                        <a href='https://developer.android.com/studio' target='_blank' className='links'>Android Studio</a>
                                    </li>
                                    <li>
                                        <a href='https://www.arduino.cc/en/software' target='_blank' className='links'>Arduino IDE</a>
                                    </li>
                                    <li>
                                        <a href='https://netbeans.apache.org/' target='_blank' className='links'>Netbeans</a>
                                    </li>
                                    <li>
                                        <a href='https://www.eclipse.org/' target='_blank' className='links'>Eclipse</a>
                                    </li>
                                    <li>
                                        <a href='https://jupyter.org/' target='_blank' className='links'>Jupyter Notebook</a>
                                    </li>
                                </ul>
                            </div>
                        </Fade>
                    </Col>
                    <Col md='3'>
                        <Fade direction='right'>
                            <div className='intro'>
                                <h5>
                                    <b><u>
                                        Embedded Systems
                            </u></b>
                                </h5>
                                <ul>
                                    <li>
                                        <a href='https://www.arduino.cc/en/Main/Products' target='_blank' className='links'>Arduino (Uno, Nano, Mega)</a>
                                    </li>
                                    <li>
                                        <a href='https://cdn.sparkfun.com/datasheets/Sensors/Proximity/HCSR04.pdf' target='_blank' className='links'>Ultrasonic Sensor (HC-SR04)</a>
                                    </li>
                                    <li>
                                        <a href='https://protosupplies.com/product/e18-d80nk-adjustable-infrared-proximity-sensor-module/' target='_blank' className='links'>Adjustable IR Sensor Proximity Switch</a>
                                    </li>
                                    <li>
                                        <a href='https://www.greyrobotics.in/line-follower-sensor-6' target='_blank' className='links'>Line Follower Sensor Array (LFS-6)</a>
                                    </li>
                                    <li>
                                        <a href='https://www.teachmemicro.com/use-l298n-motor-driver/' target='_blank' className='links'>Motor Driver (L298n)</a>
                                    </li>
                                    <li>
                                        <a href='https://maker.pro/custom/projects/all-you-need-to-know-about-l293d' target='_blank' className='links'>Motor Driver (L293d)</a>
                                    </li>
                                    <li>
                                        <a href='https://www.etechnophiles.com/hc-05-pinout-specifications-datasheet/' target='_blank' className='links'>Bluetooth Sensor (HC-05)</a>
                                    </li>
                                    <li>
                                        <a href='https://www.nodemcu.com/index_en.html' target='_blank' className='links'>NodeMCU Esp8266</a>
                                    </li>
                                </ul>
                            </div>
                        </Fade>
                    </Col>
                </Row>
                <hr></hr>
                <Zoom>
                    <h3 className='title' style={{ textAlign: 'center', color: 'black' }}>
                        Education
                    </h3>
                </Zoom>
                <Row className='mt-5'>
                    <Col md='12'>
                        <Slide direction='left'>
                            <Card className='intro custom-card'>
                                <CardBody>
                                    <CardTitle tag='h3'>
                                        Dwarkadas J. Sanghvi College of Engineering, Mumbai University
                                    </CardTitle>
                                    <CardSubtitle tag="h6" className="mb-2 text-muted">August 2018 - May 2022</CardSubtitle>
                                    <CardText>
                                        <span style={{ fontWeight: '500' }}>Bachelor of Engineering (B.E.) - Information Technology</span><br></br>9.19 C.G.PA
                                    </CardText>
                                </CardBody>
                            </Card>
                        </Slide>
                    </Col>
                </Row>
                <Row className='mt-5'>
                    <Col md='12'>
                        <Slide direction='right'>
                            <Card className='intro custom-card'>
                                <CardBody>
                                    <CardTitle tag='h3'>
                                        Samata Vidya Mandir Junior College of Science and Commerce, Mumbai. (HSC board)
                                    </CardTitle>
                                    <CardSubtitle tag="h6" className="mb-2 text-muted">February 2018</CardSubtitle>
                                    <CardText>
                                        <span style={{ fontWeight: '500' }}>Science (Std. 12)</span><br></br>84.62%
                                    </CardText>
                                </CardBody>
                            </Card>
                        </Slide>
                    </Col>
                </Row>
                <hr></hr>
                <Zoom>
                    <h3 className='title' style={{ textAlign: 'center', color: 'black' }}>
                        Work Experience
                    </h3>
                </Zoom>
                <Row className='mt-5'>
                    <Col md='12'>
                        <Slide direction='left'>
                            <Card className='intro custom-card'>
                                <CardBody>
                                    <CardTitle tag='h3'>
                                        METX Robotics
                                    </CardTitle>
                                    <CardSubtitle tag="h6" className="mb-2 text-muted">April 2019 - Present</CardSubtitle>
                                    <div>
                                        <span style={{ fontWeight: '500' }}>Research and Teaching assistant (Technical – Software) </span><br></br><br></br>
                                        <ul>
                                            <li>
                                                Worked in various automation projects like Line Following Robot, IOT based automation
                                                system, etc.
                                            </li>
                                            <li>
                                                Experienced in teaching over 20 students in STEM education and about 12 students for
                                                coding skills in C programming
                                            </li>
                                        </ul>
                                    </div>
                                </CardBody>
                            </Card>
                        </Slide>
                    </Col>
                </Row>
                <hr></hr>
                <Zoom>
                    <h3 className='title' style={{ textAlign: 'center', color: 'black' }}>
                        Position of Responsibility
                    </h3>
                </Zoom>
                <Row className='mt-5'>
                    <Col md='12'>
                        <Slide direction='right'>
                            <Card className='intro custom-card'>
                                <CardBody>
                                    <CardTitle tag='h3'>
                                        Computer Society of India (DJCSI) , DJ Sanghvi
                                    </CardTitle>
                                    <CardSubtitle tag="h6" className="mb-2 text-muted">November 2020 - Present</CardSubtitle>
                                    <div>
                                        <span style={{ fontWeight: '500' }}>Secretary </span><br></br><br></br>
                                        <ul>
                                            <li>
                                                Managed the whole committee as a backbone in the core committee
                                            </li>
                                            <li>
                                                Ensured meetings and events are effectively organised
                                            </li>
                                        </ul>
                                    </div>
                                </CardBody>
                            </Card>
                        </Slide>
                    </Col>
                </Row>
                <Row className='mt-5'>
                    <Col md='12'>
                        <Slide direction='left'>
                            <Card className='intro custom-card'>
                                <CardBody>
                                    <CardTitle tag='h3'>
                                        DJCSE Trinity, IDPT
                                    </CardTitle>
                                    <CardSubtitle tag="h6" className="mb-2 text-muted">February 2020 – April 2020</CardSubtitle>
                                    <div>
                                        <span style={{ fontWeight: '500' }}>Captain</span><br></br><br></br>
                                        <ul>
                                            <li>
                                                Lead the whole inter-department cultural competition which is almost about 2 months long.
                                            </li>
                                            <li>
                                                The team secured runner’s up position with a minimal amount of budget and resources.
                                            </li>
                                        </ul>
                                    </div>
                                </CardBody>
                            </Card>
                        </Slide>
                    </Col>
                </Row>
                <Row className='mt-5'>
                    <Col md='12'>
                        <Slide direction='right'>
                            <Card className='intro custom-card'>
                                <CardBody>
                                    <CardTitle tag='h3'>
                                        Computer Society of India (DJCSI) , DJ Sanghvi
                                    </CardTitle>
                                    <CardSubtitle tag="h6" className="mb-2 text-muted">September 2019 - November 2020</CardSubtitle>
                                    <div>
                                        <span style={{ fontWeight: '500' }}>Publicity co-committee member</span><br></br><br></br>
                                        <ul>
                                            <li>
                                                Publicised nation wide events like Codeshastra with a participation of over 3000 participants
                                            </li>
                                            <li>
                                                Increased the subscriber base of social media handles like Instagram and YouTube.
                                            </li>
                                        </ul>
                                    </div>
                                </CardBody>
                            </Card>
                        </Slide>
                    </Col>
                </Row>
                <hr></hr>
                <Zoom>
                    <h3 className='title' style={{ textAlign: 'center', color: 'black' }}>
                        Achievements and Extra-curricular
                    </h3>
                </Zoom>
                <Row className='mt-5'>
                    <Col md='12'>
                        <Bounce>
                            <div className='intro'>
                                <ul>
                                    <li>
                                        Secured 4th place in Scholastic robotics Competition organised by IIT Bombay (National level)
                                    </li>
                                    <li>
                                        Winner at CodeIt hackathon organized by E-Cell, DJSCE in association with ACM, DJSCE
                                    </li>
                                    <li>
                                        Finalist in Hack the Hourglass Hackathon organised by IEEE-MAIT
                                    </li>
                                    <li>
                                        Written a research thesis under METX Robotics for Line following Robot using PID based
                                        Algorithm
                                    </li>
                                    <li>
                                        Cleared with first division with distinction in Bal Junior and Bal Senior in Keyboard organ
                                        from Bharatiya Sangeet Samiti
                                    </li>
                                    <li>
                                        Managed a complete event at NESCO Exhibition centre for METX Robotics. (3-day long event)
                                    </li>
                                    <li>
                                        Participated in Business Plan competition organised by D.J. Nirmiti in collaboration with
                                        ISME and DJSCE
                                    </li>
                                    <li>
                                        Successfully Completed CANSAJ - Satellite Designing and Launching Workshop held at Rajiv Gandhi Institute of Technology, Mumbai.
                                    </li>
                                </ul>
                            </div>
                        </Bounce>
                    </Col>
                </Row>
                <hr></hr>
            </BasePage>
        </BaseLayout>
    )
}

export default about