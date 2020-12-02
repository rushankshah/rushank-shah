import BaseLayout from '../components/layouts/BaseLayout'
import BasePage from '../components/BasePage'


const blogs = () => {
    return (
        <BaseLayout>
            <BasePage className='about-page'>
                <h1 style={{ textAlign: 'center', color: 'black' }}>Blogs</h1>
                <Row className='mt-5'>
                    <Col md='12'>
                        <Card className='intro' style={{ borderRadius: '20px', backgroundColor: 'beige' }}>
                            <CardBody>
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
                    </Col>
                </Row>
                <hr></hr>
            </BasePage>
        </BaseLayout>
    )
}

export default blogs