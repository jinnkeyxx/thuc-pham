import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faPhoneAlt } from '@fortawesome/free-solid-svg-icons'
import logo from '../images/logo-thuc-pham.png'
import {Row , Col , Container , Nav ,ListGroup} from 'react-bootstrap'
const InfoProductComponent = () => {
    return(
        <Container className="py-5">
            <Row className="info">
                <Col md={2}>
                    <Nav.Link href="#" id="logo"><img src={logo} className="img-fluid" alt="logo"></img></Nav.Link>
                </Col>
                <Col md={6} sm={12}>
                    <ListGroup horizontal className="my-5 list-info">
                        <ListGroup.Item>Events</ListGroup.Item>
                        <ListGroup.Item>/</ListGroup.Item>
                        <ListGroup.Item>About Us</ListGroup.Item>
                        <ListGroup.Item>/</ListGroup.Item>
                        <ListGroup.Item>Besr Deals</ListGroup.Item>
                        <ListGroup.Item>/</ListGroup.Item>
                        <ListGroup.Item>Services</ListGroup.Item>
                    </ListGroup>

                </Col>
                <Col>
                <ListGroup horizontal className="my-5">
                        <ListGroup.Item>Phone</ListGroup.Item>
                        <ListGroup.Item>/</ListGroup.Item>
                        <ListGroup.Item><FontAwesomeIcon icon={faPhoneAlt}/></ListGroup.Item>

                    </ListGroup>
                </Col>
            </Row>
        </Container>
    )
}
export default React.memo(InfoProductComponent)