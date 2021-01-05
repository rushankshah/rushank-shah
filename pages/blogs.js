import BaseLayout from '../components/layouts/BaseLayout'
import BasePage from '../components/BasePage'
import { Card, CardBody, CardImg, CardSubtitle, CardText, CardTitle, Col, Row } from 'reactstrap'
import { Slide, Zoom } from 'react-awesome-reveal'
import CustomCursor from '../components/shared/CustomCursor'


const blogs = () => {
    return (
        <BaseLayout>
            <CustomCursor />
            <BasePage className='blogs-page'>
                <Zoom>
                    <h1 style={{ textAlign: 'center', color: 'black', fontWeight: 'bold' }}>Blogs</h1>
                </Zoom>
                <Row className='mt-5'>
                    <Col md='12'>
                        <Slide direction='left'>
                            <Card className='intro custom-card'>
                                <CardBody>
                                    <CardImg top src="/static/images/Custom-Cursor.png" alt="Card image cap"></CardImg>
                                    <CardTitle tag='h3'>
                                        How to add a Custom cursor to NextJS application?
                                    </CardTitle>
                                    <CardSubtitle tag="h6" className="mb-2 text-muted">05 May, 2021</CardSubtitle>
                                    <CardText>
                                        Add a custom cursor to your NextJS application
                                    </CardText>
                                    <a className='btn btn-outline-info' target='_blank' href='https://rushankshah65.medium.com/how-to-add-a-custom-cursor-in-nextjs-application-bd7564cd7b54'>Read</a>
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
                                    <CardImg top src="/static/images/sys.png" alt="Card image cap"></CardImg>
                                    <CardTitle tag='h3'>
                                        How to make an IoT app using Flutter, Firebase and NodeMCU ESP8266?
                                    </CardTitle>
                                    <CardSubtitle tag="h6" className="mb-2 text-muted">December 26, 2020</CardSubtitle>
                                    <CardText>
                                        Build an IOT app using Flutter to control an LED
                                    </CardText>
                                    <a className='btn btn-outline-info' target='_blank' href='https://rushankshah65.medium.com/how-to-make-an-iot-app-using-flutter-firebase-and-nodemcu-esp8266-b7a0a8c390ee'>Read</a>
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
                                    <CardImg top src="/static/images/flutter.png" alt="Card image cap"></CardImg>
                                    <CardTitle tag='h3'>
                                        How to install, setup and run your first Flutter application on Android Studio
                                    </CardTitle>
                                    <CardSubtitle tag="h6" className="mb-2 text-muted">October 16, 2020</CardSubtitle>
                                    <CardText>
                                        A simple guide on how you can setup and run Flutter on Android Studio
                                    </CardText>
                                    <a className='btn btn-outline-info' target='_blank' href='https://rushankshah65.medium.com/how-to-install-setup-and-run-your-first-flutter-application-on-android-studio-8ad1949373bc'>Read</a>
                                </CardBody>
                            </Card>
                        </Slide>
                    </Col>
                </Row>
                <hr></hr>
            </BasePage>
        </BaseLayout>
    )
}

export default blogs