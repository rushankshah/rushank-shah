import BaseLayout from '../components/layouts/BaseLayout'
import BasePage from '../components/BasePage'
import { Card, CardImg, Col, Row } from 'reactstrap'


const projects = () => {
    return (
        <BaseLayout>
            <BasePage className='projects-page'>
                <Row className='mt-5'>
                    <Col md='4'>
                        <Card className='intro'>
                            <CardImg top src="/static/images/insta.jpg" alt="Card image cap"></CardImg>
                        </Card>
                    </Col>
                </Row>
            </BasePage>
        </BaseLayout>
    )
}

export default projects