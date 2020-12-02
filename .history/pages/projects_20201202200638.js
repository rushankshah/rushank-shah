import BaseLayout from '../components/layouts/BaseLayout'
import BasePage from '../components/BasePage'
import { Card, CardBody, CardImg, CardTitle, Col, Row } from 'reactstrap'


const projects = () => {
    return (
        <BaseLayout>
            <BasePage className='projects-page'>
                <Row className='mt-5'>
                    <Col md='4'>
                        <Card className='intro'>
                            <CardImg width='50%' top src="/static/images/virtual-labs-logo.png" alt="Card image cap"></CardImg>
                            <CardBody>
                                <CardTitle tag='h3'>
                                    Virtual Labs
                                </CardTitle>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </BasePage>
        </BaseLayout>
    )
}

export default projects