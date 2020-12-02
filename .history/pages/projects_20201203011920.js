import BaseLayout from '../components/layouts/BaseLayout'
import BasePage from '../components/BasePage'
import { Card, CardBody, CardImg, CardSubtitle, CardTitle, Col, Row } from 'reactstrap'


const projects = () => {
    return (
        <BaseLayout>
            <BasePage className='projects-page'>
                <h1 style={{textAlign: 'center', color: 'black'}}>Personal Projects</h1>
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
                            <CardImg top src="/static/images/healthcare.png" style={{borderRadius: '50px 50px 0px 0px'}} alt="Card image cap"></CardImg>
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
                            <CardImg top src="/static/images/courseit.png" style={{borderRadius: '50px 50px 0px 0px'}} alt="Card image cap"></CardImg>
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
                                        <a className='btn btn-outline-info' target='_blank' href='https://github.com/rushankshah/SecureHealth'>Repository</a>
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