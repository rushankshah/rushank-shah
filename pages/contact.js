import BaseLayout from '../components/layouts/BaseLayout'
import BasePage from '../components/BasePage'
import { Button, Col, Container, Form, FormFeedback, FormGroup, Input, Label, Row, Toast, ToastBody, ToastHeader } from 'reactstrap'
import { useState } from 'react'
import { Zoom } from 'react-awesome-reveal'
import validator from 'validator'
import emailjs from 'emailjs-com';

const contact = () => {

    const [submit, isSubmitting] = useState(false)

    const [showToast, setToast] = useState(false)

    const [nameValidation, setNameValidated] = useState(false)

    const [emailValidation, setEmailValidation] = useState(false)

    const [subjectValidation, setSubjectValidation] = useState(false)

    const [messageValidation, setMessageValidation] = useState(false)

    function handleSubmit(e) {
        e.preventDefault()
        if (nameValidation && emailValidation && subjectValidation && messageValidation
        ) {
            isSubmitting(true)
            emailjs.sendForm('service_do2sgl3', 'template_2m6ik84', e.target, 'user_W9C33uDdLyeyJH34XvJhJ')
                .then((result) => {
                    console.log(result.text);
                    setTimeout(() => {
                        setToast(true)
                    }, 3000)
                    setNameValidated(false)
                    setEmailValidation(false)
                    setSubjectValidation(false)
                    setMessageValidation(false)
                    e.target.reset()
                }, (error) => {
                    console.log(error.text);
                });
        }
    }

    return (
        <BaseLayout>
            <BasePage className='contact-page'>
                <Container>
                    <Zoom>
                        <h1 style={{ textAlign: 'center', color: 'black', fontWeight: 'bold' }}>Open to all suggestions and collaborations</h1>
                    </Zoom>
                    <Row className='mt-5'>
                        <Col md='6'>
                            <Form onSubmit={handleSubmit}>
                                <Zoom direction='right'>
                                    <FormGroup check>
                                        <Label for='name' className='normal-text'>Name</Label>
                                        <Input valid={nameValidation} invalid={!nameValidation} onChange={(e) => {
                                            if (e.target.value != '')
                                                setNameValidated(true)
                                            else
                                                setNameValidated(false)
                                        }} type='text' name='name' id='name' placeholder='Please enter your name here' required />
                                        <FormFeedback>This field cannot be empty</FormFeedback>
                                    </FormGroup>
                                </Zoom>
                                <Zoom direction='right'>
                                    <FormGroup check>
                                        <Label for='email' className='normal-text'>Email</Label>
                                        <Input valid={emailValidation} invalid={!emailValidation} onChange={(e => {
                                            if (validator.isEmail(e.target.value))
                                                setEmailValidation(true)
                                            else
                                                setEmailValidation(false)
                                        })} type='text' name='email' id='email' placeholder='Please enter your email here' required />
                                        <FormFeedback>Invalid Email</FormFeedback>
                                    </FormGroup>
                                </Zoom>
                                <Zoom direction='right'>
                                    <FormGroup check>
                                        <Label for='subject' className='normal-text'>Subject</Label>
                                        <Input valid={subjectValidation} invalid={!subjectValidation} onChange={(e) => {
                                            if (e.target.value != '')
                                                setSubjectValidation(true)
                                            else
                                                setSubjectValidation(false)
                                        }} type='text' name='subject' id='subject' placeholder='Please enter your subject here' required />
                                        <FormFeedback>This field cannot be empty</FormFeedback>
                                    </FormGroup>
                                </Zoom>
                                <Zoom direction='right'>
                                    <FormGroup check>
                                        <Label for='message' className='normal-text'>Messsage</Label>
                                        <Input type='textarea' valid={messageValidation} invalid={!messageValidation} onChange={(e) => {
                                            if (e.target.value != '')
                                                setMessageValidation(true)
                                            else
                                                setMessageValidation(false)
                                        }} name='message' id='message' placeholder='Please enter your message here' required />
                                        <FormFeedback>This field cannot be empty</FormFeedback>
                                    </FormGroup>
                                </Zoom>
                                <br></br>
                                <Zoom direction='right'>
                                    <FormGroup check>
                                        <Button outline color='info' disabled={submit}> Submit </Button>
                                    </FormGroup>
                                </Zoom>
                            </Form>
                        </Col>
                        <Col md='6' className='justify-content-center d-flex'>
                            <Zoom direction='left'>
                                <Toast isOpen={showToast}>
                                    <ToastHeader toggle={() => setToast(false)}>
                                        Thanks for connecting!
                                    </ToastHeader>
                                    <ToastBody className='normal-text'>
                                        I will get back to you soon! I have sent you an auto generated mail to confirm that your message has been sent!!!
                                    </ToastBody>
                                </Toast>
                            </Zoom>
                        </Col>
                    </Row>
                    <Row className='mt-5'></Row>
                </Container>
            </BasePage>
        </BaseLayout>
    )
}

export default contact