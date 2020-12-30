import BaseLayout from '../components/layouts/BaseLayout'
import BasePage from '../components/BasePage'
import { Col, Container, Row } from 'reactstrap'
import { Zoom } from 'react-awesome-reveal'
import CustomCursor from '../components/shared/CustomCursor'


const cv = () => {
    return (
        <BaseLayout>
            <CustomCursor />
            <BasePage className='about-page'>
                <Container>
                    <Zoom>
                        <h1 style={{ textAlign: 'center', color: 'black', fontWeight: 'bold' }}>View my CV</h1>
                    </Zoom>
                    <Row className='mt-5'>
                        <Col md={{ size: 8, offset: 2 }}>
                            <div style={{ textAlign: 'center', marginBottom: '20px' }}>
                                <a download='Rushank Shah.pdf' className='btn btn-outline-success' href='/static/Resume-Rushank-Shah.pdf'>Download my Resume</a>
                            </div>
                            <iframe style={{ width: '100%', height: '800px' }} src='/static/Resume-Rushank-Shah.pdf'></iframe>
                        </Col>
                    </Row>
                    <hr></hr>
                </Container>
            </BasePage>
        </BaseLayout>
    )
}

export default cv