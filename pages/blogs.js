import BaseLayout from '../components/layouts/BaseLayout'
import BasePage from '../components/BasePage'
import { Card, CardBody, CardImg, CardSubtitle, CardText, CardTitle, Col, Row } from 'reactstrap'
import { Slide, Zoom } from 'react-awesome-reveal'


const blogs = () => {
    return (
        <BaseLayout>
            <BasePage className='blogs-page'>
                <Zoom>
                    <h1 style={{ textAlign: 'center', color: 'black', fontWeight: 'bold' }}>Blogs</h1>
                </Zoom>
                <Row className='mt-5'>
                    <Col md='12'>
                        <Slide direction='left'>
                            <Card className='intro custom-card' style={{ borderRadius: '20px' }}>
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