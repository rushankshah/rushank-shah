import BaseLayout from '../components/layouts/BaseLayout'
import BasePage from '../components/BasePage'
import { Card, CardBody, CardSubtitle, CardText, CardTitle, Col, Row } from 'reactstrap'

const about = () => {
    return (
        <BaseLayout>
            <BasePage className='about-page'>
                <Row className='mt-5'>
                    <Col md='6'>
                        <div className='left-side'>
                            <h1 className='title fadein'>
                                नमस्ते!
                            </h1>
                            <h4 className='subtitle fadein'>
                                Feel Free to connect
                            </h4>
                            <img src='/static/images/profile.jpg' className='fadein center' style={{ borderRadius: '20px', height: '275px' }}></img>
                        </div>
                    </Col>
                    <Col md='6'>
                        <div className='fadein intro'>
                            <p>My name is <span style={{ fontWeight: 'bold' }}>Rushank Shah</span> and I am an experienced Developer and upcoming IT Engineer</p>
                            <p>I am currently pursuing my Bachelor's Degree from D.J. Sanghvi College of Engineering, Mumbai, India
                            and am experienced working on wide range of technologies and projects from C++ development for Arduino in Robotics
                            and Automation project to building modern and beautiful mobile and web apps using Flutter and React.
                            </p>
                            <p>
                                I enjoy building up new Ideas and solutions to real life problems and devising feasible solutions to broadly relevant problems
                            </p>
                        </div>
                    </Col>
                </Row>
                <hr></hr>
                <h3 className='title' style={{ textAlign: 'center', color: 'black' }}>
                    Key Technical Skills
                </h3>
                <Row className='mt-5'>
                    <Col md='3'>
                        <div className='intro'>
                            <h5><b><u>Languages & databases</u></b></h5>
                            <ul>
                                <li>
                                    Java
                                    </li>
                                <li>
                                    Javascript
                                    </li>
                                <li>
                                    Dart
                                    </li>
                                <li>
                                    C/C++
                                    </li>
                                <li>
                                    Python
                                    </li>
                                <li>
                                    HTML
                                    </li>
                                <li>
                                    CSS
                                    </li>
                                <li>
                                    SQL
                                    </li>
                                <li>
                                    NoSQL
                                    </li>
                            </ul>
                        </div>
                    </Col>
                    <Col md='3'>
                        <div className='intro'>
                            <h5>
                                <b><u>Mobile, Web & Desktop Frameworks</u></b>
                            </h5>
                            <ul>
                                <li>
                                    Flutter
                                </li>
                                <li>
                                    ReactJS
                                </li>
                                <li>
                                    NextJS
                                </li>
                                <li>
                                    NodeJS
                                </li>
                                <li>
                                    ExpressJS
                                </li>
                                <li>
                                    Django (Basic)
                                </li>
                                <li>
                                    JavaFX
                                </li>
                                <li>
                                    Bootstrap
                                </li>
                                <li>
                                    MaterializeCSS
                                </li>
                            </ul>
                        </div>
                    </Col>
                    <Col md='3'>
                        <div className='intro'>
                            <h5>
                                <b><u>
                                    Software & Tools
                                </u></b>
                            </h5>
                            <ul>
                                <li>
                                    Git
                                </li>
                                <li>
                                    GitHub
                                </li>
                                <li>
                                    Firebase
                                </li>
                                <li>
                                    MySQL
                                </li>
                                <li>
                                    Visual Studio Code
                                </li>
                                <li>
                                    Android Studio
                                </li>
                                <li>
                                    Arduino IDE
                                </li>
                                <li>
                                    Jupyter Notebook
                                </li>
                            </ul>
                        </div>
                    </Col>
                    <Col md='3'>
                        <div className='intro'>
                            <h5>
                                <b><u>
                                    Embedded Systems
                                </u></b>
                            </h5>
                            <ul>
                                <li>
                                    Arduino (Uno, Nano, Mega)
                                </li>
                                <li>
                                    Ultrasonic Sensor (HC-SR04)
                                </li>
                                <li>
                                    Light Sensor
                                </li>
                                <li>
                                    Analog/Digital Sensor Array of 6 Using Reflectance Sensor
                                </li>
                                <li>
                                    Motors
                                </li>
                                <li>
                                    Motor Driver (L2938, L2898n)
                                </li>
                                <li>
                                    Bluetooth Sensor (HC-05)
                                </li>
                                <li>
                                    NodeMCU Esp8266
                                </li>
                            </ul>
                        </div>
                    </Col>
                </Row>
                <hr></hr>
                <h3 className='title' style={{ textAlign: 'center', color: 'black' }}>
                    Education
                </h3>
                <Row className='mt-5'>
                    <Col md='12'>
                        <Card className='intro' style={{ borderRadius: '20px', backgroundColor: 'beige' }}>
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
                    </Col>
                </Row>
                <Row className='mt-5'>
                    <Col md='12'>
                        <Card className='intro' style={{ borderRadius: '20px', backgroundColor: 'beige' }}>
                            <CardBody>
                                <CardTitle tag='h3'>
                                    Samata Vidya Mandir Junior College of Science and Commerce, Mumbai. (HSC board).
                                </CardTitle>
                                <CardSubtitle tag="h6" className="mb-2 text-muted">February 2018</CardSubtitle>
                                <CardText>
                                    <span style={{ fontWeight: '500' }}>Science (Std. 12)</span><br></br>84.62%
                                </CardText>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
                <hr></hr>
                <h3 className='title' style={{ textAlign: 'center', color: 'black' }}>
                    Experience
                </h3>
                <Row className='mt-5'>
                    <Col md='12'>
                        <Card className='intro' style={{ borderRadius: '20px', backgroundColor: 'beige' }}>
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
                    </Col>
                </Row>
                <hr></hr>
                <h3 className='title' style={{ textAlign: 'center', color: 'black' }}>
                    Position of Responsibility
                </h3>
                <Row className='mt-5'>
                    <Col md='12'>
                        <Card className='intro' style={{ borderRadius: '20px', backgroundColor: 'beige' }}>
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
                    </Col>
                </Row>
                <Row className='mt-5'>
                    <Col md='12'>
                        <Card className='intro' style={{ borderRadius: '20px', backgroundColor: 'beige' }}>
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
                    </Col>
                </Row>
                <hr></hr>
                <h3 className='title' style={{ textAlign: 'center', color: 'black' }}>
                    Achievements and Extra-curricular
                </h3>
                <Row className='mt-5'>
                    <Col md='12'>
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
                    </Col>
                </Row>
                <hr></hr>
            </BasePage>
        </BaseLayout>
    )
}

export default about