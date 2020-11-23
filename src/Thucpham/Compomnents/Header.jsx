import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch , faShoppingCart, faUser} from '@fortawesome/free-solid-svg-icons'

import {Navbar ,NavDropdown , Nav ,InputGroup ,FormControl ,Row , Col } from 'react-bootstrap'
const HeaderComponent = () => {


    return(
        <header className="" id="header">
        <Row className="fixW">
            <Navbar  className=" navbar-dark" data-toggle="sticky-onscroll"  expand="lg">
                <Col md={12} lg={3} sm={12}>
                    <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                </Col>
                <Col>
                    <Row>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Navbar.Collapse id="basic-navbar-nav">
                            <Col md={12} lg={7} className="text-center" >
                                <InputGroup id="searchProduct">
                                <FormControl className="search"
                                placeholder="serach a product"
                                aria-label="serach a product"
                                aria-describedby="basic-addon2"
                                />
                                <InputGroup.Append className="">
                                <InputGroup.Text id="basic-addon2"><FontAwesomeIcon icon={faSearch}/></InputGroup.Text>
                                </InputGroup.Append>
                                </InputGroup>
                            </Col>
                            <Col>
                                <Nav className="">
                                    <NavDropdown title='User Info' id="basic-nav-dropdown">
                                        <NavDropdown.Item href="#">Dang Nhap  <FontAwesomeIcon icon={faUser}/></NavDropdown.Item>
                                        <NavDropdown.Item href="#">Dang Ki <FontAwesomeIcon icon={faUser}/></NavDropdown.Item>
                                    </NavDropdown>
                                    {/* <div class="dropdown">
                                    <Nav.Link href="#home" id="shop" className="">Tai Khoan <FontAwesomeIcon icon={faUser}/></Nav.Link>
                                        <div class="dropdown-content">
                                        <a href="" className="user">Dang nhap</a>

                                        <a href=""className="user">Dang nhap</a>
                                        </div>
                                    </div> */}

                                    <Nav.Link href="#home" id="shop" className="">View Your Cart <FontAwesomeIcon icon={faShoppingCart}/></Nav.Link>
                                    <Nav.Link href="#link" id="contact">Contact Us</Nav.Link>
                                </Nav>
                            </Col>
                        </Navbar.Collapse>
                    </Row>
                </Col>
            </Navbar>
        </Row>
        </header>
    )
}
export default React.memo(HeaderComponent)