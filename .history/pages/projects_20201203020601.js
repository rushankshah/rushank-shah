import BaseLayout from '../components/layouts/BaseLayout'
import BasePage from '../components/BasePage'
import { Card, CardBody, CardImg, CardSubtitle, CardTitle, Col, Row } from 'reactstrap'


const projects = () => {
    return (
        <BaseLayout>
            <BasePage className='projects-page'>
                <h1 style={{ textAlign: 'center', color: 'black' }}>Personal Projects</h1>
                <Row className='mt-5'>
                    <Col md='4'>
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
                    </Col>
                    <Col md='4'>
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
                    </Col>
                    <Col md='4'>
                        <Card className='intro custom-card'>
                            <CardImg top src="/static/images/courseit.png" style={{ borderRadius: '50px 50px 0px 0px' }} alt="Card image cap"></CardImg>
                            <hr></hr>
                            <CardBody>
                                <CardTitle tag='h3'>
                                    Course It
                                </CardTitle>
                                <CardSubtitle tag="h6" className="mb-2 text-muted">Developed interactive & responsive website for a Start Up aiming to create a platform for engineering students to implement research-oriented projects & write research papers, while acquiring all the necessary skills relevant to the industry.</CardSubtitle>
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
                    </Col>
                </Row>
                <Row className='mt-5'>
                    <Col md='4'>
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
                    </Col>
                    <Col md='4'>
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
                    </Col>
                    <Col md='4'>
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
                    </Col>
                </Row>
                <hr></hr>
            </BasePage>
        </BaseLayout>
    )
}

export default projects