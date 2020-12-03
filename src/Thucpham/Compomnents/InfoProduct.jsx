import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhoneAlt , faEnvelope } from '@fortawesome/free-solid-svg-icons'
import logo from '../images/logo-thuc-pham.png'
import {Row , Col , Container , Nav ,ListGroup } from 'react-bootstrap'
const InfoProductComponent = () => {
    return(
        <Container className="py-3">
            <Row className="info justify-content-sm-center">
                <Col md={3} xs={12} sm={12} lg={2}>
                    <Nav.Link href="#" id="logo"><img src={logo} className="img-fluid" alt="logo"></img></Nav.Link>
                </Col>
                <Col>
                    <Row className="justify-content-md-center justify-content-xs-center justify-content-sm-center">
                        <Col className="mt-5" md={12} sm={12} lg={6}>
                            <ListGroup horizontal className="list-info">
                                <ListGroup.Item><a href="/">Events</a></ListGroup.Item>
                                <ListGroup.Item><a href="/">About Us</a></ListGroup.Item>
                                <ListGroup.Item><a href="/">Besr Deals</a></ListGroup.Item>
                                <ListGroup.Item><a href="/">Services</a></ListGroup.Item>
                            </ListGroup>
                        </Col>
                        <Col md={12} sm={12} lg={6} xs={12}>
                            <ListGroup horizontal className="mt-5 justify-content-md-center  justify-content-sm-center justify-content-xs-center">
                                <ListGroup.Item ><FontAwesomeIcon icon={faPhoneAlt}/> &nbsp;  0862050201 </ListGroup.Item>
                                <ListGroup.Item className="emailProduct"><FontAwesomeIcon icon={faEnvelope}/> &nbsp; boolbool@gmail.com
                                </ListGroup.Item>
                            </ListGroup>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}
export default React.memo(InfoProductComponent)