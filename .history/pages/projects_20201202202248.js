import BaseLayout from '../components/layouts/BaseLayout'
import BasePage from '../components/BasePage'
import { Button, Card, CardBody, CardImg, CardSubtitle, CardTitle, Col, Row } from 'reactstrap'


const projects = () => {
    return (
        <BaseLayout>
            <BasePage className='projects-page'>
                <Row className='mt-5'>
                    <Col md='4'>
                        <Card className='intro custom-card' style={{ borderRadius: '50px' }}>
                            <CardImg width='25%' top src="/static/images/virtual-labs-logo.png" alt="Card image cap"></CardImg>
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
                                        <a className='btn btn-outline-info' target='_blank' href='http://cdac.olabs.edu.in/?sub=74&brch=31&sim=249&cnt=4'>Repository</a>
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