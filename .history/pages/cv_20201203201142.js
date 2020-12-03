import BaseLayout from '../components/layouts/BaseLayout'
import BasePage from '../components/BasePage'
import { Col, Container, Row } from 'reactstrap'


const cv = () => {
    return (
        <BaseLayout>
            <BasePage className='about-page'>
                <Container>
                <h1 style={{textAlign: "center", color: 'black'}}>View My CV</h1>
                    <Row className='mt-5'>
                        <Col md={{ size: 8, offset: 2 }}>
                            <div style={{textAlign: 'center', marginBottom: '20px'}}>
                                <a download='Rushank Shah.pdf' className='btn btn-success' href='/static/Resume-Final.pdf'>Download my Resume</a>
                            </div>
                            <iframe style={{ width: '100%', height: '800px' }} src='/static/Resume-Final.pdf'></iframe>
                        </Col>
                    </Row>
                    <hr></hr>
                </Container>
            </BasePage>
        </BaseLayout>
    )
}

export default cv