import BaseLayout from '../components/layouts/BaseLayout'
import BasePage from '../components/BasePage'
import { Card, CardBody, CardImg, CardSubtitle, CardTitle, Col, Row } from 'reactstrap'
import { Fade, Zoom } from 'react-awesome-reveal'


const projects = () => {
    return (
        <BaseLayout>
            <BasePage className='projects-page'>
                <Zoom>
                    <h1 style={{ textAlign: 'center', color: 'black', fontWeight: 'bold' }}>Personal Projects</h1>
                </Zoom>

                <Row className='mt-5'>
                    <Col md='4'>
                        <Fade delay={500}>
                            <Card className='intro custom-card'>
                                <CardImg top src="/static/images/virtual-labs-logo.png" alt="Card image cap"></CardImg>
                                <hr></hr>
                                <CardBody>
                                    <CardTitle tag='h3'>
                                        Virtual Labs
                                </CardTitle>
                                    <CardSubtitle tag="h6" className="mb-2 text-muted">Developed a virtual simulator to understand experiments visually by using ReactJS as the web framework and flutter as the mobile framework and Flare-JS for the animations.</CardSubtitle>
                                    <Row className='mt-5'>
                                        <Col md='6'>
                                            <a className='btn btn-outline-info' target='_blank' href='http://cdac.olabs.edu.in/?sub=74&brch=31&sim=249&cnt=4'>Project</a>
                                        </Col>
                                        <Col md='6'>
                                            <a className='btn btn-outline-info' target='_blank' href='https://github.com/rushankshah/VirtualLabs-React'>Repository</a>
                                        </Col>
                                    </Row>
                                </CardBody>
                            </Card>
                        </Fade>
                    </Col>
                    <Col md='4'>
                        <Fade delay={1000}>
                            <Card className='intro custom-card'>
                                <CardImg top src="/static/images/healthcare.png" style={{ borderRadius: '50px 50px 0px 0px' }} alt="Card image cap"></CardImg>
                                <hr></hr>
                                <CardBody>
                                    <CardTitle tag='h3'>
                                        Automated Hospital Management
                                    </CardTitle>
                                    <CardSubtitle tag="h6" className="mb-2 text-muted">A cross-platform mobile application for seamless operation of hospital management.</CardSubtitle>
                                    <Row className='mt-5'>
                                        <Col md='6'>
                                            <a className='btn btn-outline-info' target='_blank' href='https://www.youtube.com/watch?v=YVA4nBIPkeM&feature=youtu.be'>Project</a>
                                        </Col>
                                        <Col md='6'>
                                            <a className='btn btn-outline-info' target='_blank' href='https://github.com/rushankshah/SecureHealth'>Repository</a>
                                        </Col>
                                    </Row>
                                </CardBody>
                            </Card>
                        </Fade>
                    </Col>
                    <Col md='4'>
                        <Fade delay={1500}>
                            <Card className='intro custom-card'>
                                <CardImg top src="/static/images/courseit.png" style={{ borderRadius: '50px 50px 0px 0px' }} alt="Card image cap"></CardImg>
                                <hr></hr>
                                <CardBody>
                                    <CardTitle tag='h3'>
                                        Course It
                                    </CardTitle>
                                    <CardSubtitle tag="h6" className="mb-2 text-muted">A full-fledged online learning platform contains numerous features aiming to improve the e-learning system, right from analytics to achieving abstraction and various customization for students/professors. We developed a website as well as a cross-platform mobile application.</CardSubtitle>
                                    <Row className='mt-5'>
                                        <Col md='6'>
                                            <a className='btn btn-outline-info' target='_blank' href='https://www.youtube.com/watch?v=DS0so4L6310&feature=youtu.be'>Project</a>
                                        </Col>
                                        <Col md='6'>
                                            <a className='btn btn-outline-info' target='_blank' href='https://github.com/rushankshah/T014_Masterbridge'>Repository</a>
                                        </Col>
                                    </Row>
                                </CardBody>
                            </Card>
                        </Fade>
                    </Col>
                </Row>
                <Row className='mt-5'>
                    <Col md='4'>
                        <Fade delay={500}>
                            <Card className='intro custom-card'>
                                <CardImg top src="/static/images/u_connect.jpg" style={{ borderRadius: '50px 50px 0px 0px' }} alt="Card image cap"></CardImg>
                                <hr></hr>
                                <CardBody>
                                    <CardTitle tag='h3'>
                                        U Connect
                                    </CardTitle>
                                    <CardSubtitle tag="h6" className="mb-2 text-muted">A real-time chat application with video calling and image sharing (both camera and gallery) functionalities. Made using agora RTC and Firebase. It has some more minor features like login and logout features, emoji support, etc.</CardSubtitle>
                                    <Row className='mt-5'>
                                        <Col md='6'>
                                            <a className='btn btn-outline-info' target='_blank' href='https://www.linkedin.com/feed/update/urn:li:activity:6686195640520728576/'>Project</a>
                                        </Col>
                                        <Col md='6'>
                                            <a className='btn btn-outline-info' target='_blank' href='https://github.com/rushankshah/U-Connect'>Repository</a>
                                        </Col>
                                    </Row>
                                </CardBody>
                            </Card>
                        </Fade>
                    </Col>
                    <Col md='4'>
                        <Fade delay={1000}>
                            <Card className='intro custom-card'>
                                <CardImg top src="/static/images/ARMarvel.png" style={{ borderRadius: '50px 50px 0px 0px' }} alt="Card image cap"></CardImg>
                                <hr></hr>
                                <CardBody>
                                    <CardTitle tag='h3'>
                                        AR Marvel
                                    </CardTitle>
                                    <CardSubtitle tag="h6" className="mb-2 text-muted">Since the day I heard about it, AR was one of the most fascinating topics for me. My first attempt towards AR. Hope to improve it soon. This app comprises of my favourite characters from the MCU🕺. Made with Flutter and ARCore.</CardSubtitle>
                                    <Row className='mt-5'>
                                        <Col md='6'>
                                            <a className='btn btn-outline-info' target='_blank' href='https://www.linkedin.com/feed/update/urn:li:activity:6676519220106321920/'>Project</a>
                                        </Col>
                                        <Col md='6'>
                                            <a className='btn btn-outline-info' target='_blank' href='https://github.com/rushankshah/ARFlutter'>Repository</a>
                                        </Col>
                                    </Row>
                                </CardBody>
                            </Card>
                        </Fade>
                    </Col>
                    <Col md='4'>
                        <Fade delay={1500}>
                            <Card className='intro custom-card'>
                                <CardImg top src="/static/images/Realtime-Detection.png" style={{ borderRadius: '50px 50px 0px 0px' }} alt="Card image cap"></CardImg>
                                <hr></hr>
                                <CardBody>
                                    <CardTitle tag='h3'>
                                        Realtime Object Detection
                                    </CardTitle>
                                    <CardSubtitle tag="h6" className="mb-2 text-muted">A flutter app made with Tensorflow Lite plugin for object detection. This app can detect different objects and also shows a probability of it's claim</CardSubtitle>
                                    <Row className='mt-5'>
                                        <Col md='6'>
                                            <a className='btn btn-outline-info' target='_blank' href='https://www.linkedin.com/posts/rushankshah-65836b1a6_machinelearning-flutter-activity-6696047824955551744-udEl'>Project</a>
                                        </Col>
                                        <Col md='6'>
                                            <a className='btn btn-outline-info' target='_blank' href='https://github.com/rushankshah/Realtime-Object-Detection'>Repository</a>
                                        </Col>
                                    </Row>
                                </CardBody>
                            </Card>
                        </Fade>
                    </Col>
                </Row>
                <Row className='mt-5'>
                    <Col>
                    </Col>
                    <Col md='4'>
                        <Fade delay={500}>
                            <Card className='intro custom-card'>
                                <CardImg top src="/static/images/Inventory-Management-System.png" style={{ borderRadius: '50px 50px 0px 0px' }} alt="Card image cap"></CardImg>
                                <hr></hr>
                                <CardBody>
                                    <CardTitle tag='h3'>
                                        Inventory Management System
                                    </CardTitle>
                                    <CardSubtitle tag="h6" className="mb-2 text-muted">This project was made for an Iron and steel company for managing their stocks. The project was made using ReactJS and Materialize-CSS. It used firebase as it's backend service</CardSubtitle>
                                    <Row className='mt-5'>
                                        <Col md='6'>
                                            <a className='btn btn-outline-info' target='_blank' href='https://inventory-management-sys-c24d8.web.app'>Project</a>
                                        </Col>
                                        <Col md='6'>
                                            <a className='btn btn-outline-info' target='_blank' href='https://github.com/rushankshah/Inventory-Management-System'>Repository</a>
                                        </Col>
                                    </Row>
                                </CardBody>
                            </Card>
                        </Fade>
                    </Col>
                    <Col md='4'>
                        <Fade delay={1000}>
                            <Card className='intro custom-card'>
                                <CardImg top src="/static/images/Find-Origin.png" style={{ borderRadius: '50px 50px 0px 0px' }} alt="Card image cap"></CardImg>
                                <hr></hr>
                                <CardBody>
                                    <CardTitle tag='h3'>
                                        Find Origin
                                    </CardTitle>
                                    <CardSubtitle tag="h6" className="mb-2 text-muted">During times like these when apps are being banned people are trying to find alternatives to them. This completely offline app is a collection of about 150 apps and 25 categories. As soon as you tap on any alternative it will directly redirect you to the play store.</CardSubtitle>
                                    <Row className='mt-5'>
                                        <Col md='6'>
                                            <a className='btn btn-outline-info' target='_blank' href='https://www.linkedin.com/posts/rushankshah-65836b1a6_flutterapp-activity-6687569531293982720-jA9J'>Project</a>
                                        </Col>
                                        <Col md='6'>
                                            <a className='btn btn-outline-info' target='_blank' href='https://github.com/rushankshah/Find-Origin'>Repository</a>
                                        </Col>
                                    </Row>
                                </CardBody>
                            </Card>
                        </Fade>
                    </Col>
                    <Col></Col>
                </Row>
                <hr></hr>
            </BasePage>
        </BaseLayout>
    )
}

export default projects