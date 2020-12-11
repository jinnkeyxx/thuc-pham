import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch , faShoppingCart, faUser} from '@fortawesome/free-solid-svg-icons'
import {Navbar , NavDropdown , Nav , InputGroup , FormControl , Row , Col } from 'react-bootstrap'
import * as api from '../Service/apiHelper'
const HeaderComponent = () => {
    const userLogin = api.getUsername()
    const roleUser = api.getRole()
    const logout = (event) => {
        event.preventDefault()
        api.removeToken()
        window.location.reload()
    }
    return(

        <header className="" id="header">
            <Row>
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
                                        <NavDropdown title={userLogin === null ? 'Login' : `Hi : ${userLogin}`} id="basic-nav-dropdown">
                                            {userLogin === null ? (<> <NavDropdown.Item href="/login">Dang Nhap  <FontAwesomeIcon icon={faUser}/></NavDropdown.Item>
                                            <NavDropdown.Item href="#">Dang Ki <FontAwesomeIcon icon={faUser}/></NavDropdown.Item> </>) :
                                            (<>
                                            {roleUser === '1' && (<NavDropdown.Item href="/dashboard">Quan ly <FontAwesomeIcon icon={faUser}/></NavDropdown.Item>)  }

                                            <NavDropdown.Item href="#" onClick={logout}>Log out <FontAwesomeIcon icon={faUser}/></NavDropdown.Item>
                                            </>)}
                                        </NavDropdown>
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