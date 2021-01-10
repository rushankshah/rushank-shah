import React from 'react'
import { Container } from 'reactstrap'
import Footer from './shared/Footer'

export default function BasePage(props) {
    const className = props.className || ''
    return (
        <div className={`base-page ${className}`}>
            <Container>
                {props.children}
                <Footer />
            </Container>
        </div>
    )
}
