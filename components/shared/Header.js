import { useState } from 'react'
import Link from 'next/link'
import Head from 'next/head'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem
} from 'reactstrap';

const Header = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    const className = props.className

    const menuOpenClass = isOpen ? 'menu-open' : 'menu-close'

    return (
        <div>
            <Head>
                <title>Rushank Shah</title>
                <link rel="icon" href="/static/images/R.jpg" />
                <meta charset="UTF-8" />
                <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
                <meta httpEquiv="Content-Type" content="text/html; charset=ISO-8859-1" />
                <meta name="description" content="This website is the portfolio website of Rushank Shah" />
                <meta name="keywords" content="Rushank Shah, Portfolio, Rushank Mihir Shah, R Shah, RS" />
                <meta name="author" content="Rushank Shah" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <link href="https://cdn.lineicons.com/2.0/LineIcons.css" rel="stylesheet"></link>
            </Head>
            <Navbar className={`port-navbar port-nav-base absolute ${className} ${menuOpenClass}`} color="transparent" dark expand="md">
                <Link href='/'><NavbarBrand className='port-navbar-brand'><a className='name-link'>Rushank Shah</a></NavbarBrand></Link>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="ml-auto" navbar>
                        <NavItem className='port-navbar-item'>
                            <Link href='/'>
                                <a className='nav-link port-navbar-link'> Home </a>
                            </Link>
                        </NavItem>
                        <NavItem className='port-navbar-item'>
                            <Link href='/about'>
                                <a className='nav-link port-navbar-link'> About </a>
                            </Link>
                        </NavItem>
                        <NavItem className='port-navbar-item'>
                            <Link href='/projects'>
                                <a className='nav-link port-navbar-link'> Projects </a>
                            </Link>
                        </NavItem>
                        <NavItem className='port-navbar-item'>
                            <Link href='/cv'>
                                <a className='nav-link port-navbar-link'> CV </a>
                            </Link>
                        </NavItem>
                        <NavItem className='port-navbar-item'>
                            <Link href='/blogs'>
                                <a className='nav-link port-navbar-link'> Blogs </a>
                            </Link>
                        </NavItem>
                        <NavItem className='port-navbar-item'>
                            <Link href='/contact'>
                                <a className='nav-link port-navbar-link'> Contact me </a>
                            </Link>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    )
}

export default Header