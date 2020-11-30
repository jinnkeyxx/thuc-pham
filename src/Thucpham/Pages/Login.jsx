import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook }  from '@fortawesome/free-brands-svg-icons'
import {Container , Row , Col , Form , Button ,Card} from 'react-bootstrap'
import '../Compomnents/css/Layout.css'
const FormLogin = (props) => {
    return(
        <Container>
            <Row className="justify-content-md-center">
            <Col sm={9} md={7} lg={5}>
                <Card className="card-signin my-5">
                    <Card.Body>
                        <Card.Title className="text-center">Sign In</Card.Title>
                        <p className="text-danger">{props.error}</p>
                        <Form className="form-signin" onSubmit={props.submit}>
                        <Form.Group className="form-label-group">
                            <Form.Control type="email" id="inputEmail" name={props.email} value={props.valueEmail} onChange={props.changeInput} className="form-control" placeholder="Email address"   />
                            <Form.Label htmlFor="inputEmail">Email address</Form.Label>
                        </Form.Group>
                        <Form.Group className="form-label-group">
                            <Form.Control type="password" id="inputPassword" name={props.password} value={props.valuePassword} onChange={props.changeInput} className="form-control" placeholder="Password"  />
                            <Form.Label htmlFor="inputPassword">Password</Form.Label>
                        </Form.Group>
                        <Form.Group className="custom-control custom-checkbox mb-3">
                            <Form.Control type="checkbox" className="custom-control-input" id="customCheck1" />
                            <Form.Label className="custom-control-label" htmlFor="customCheck1">Remember password</Form.Label>
                        </Form.Group>
                        <Button className="btn btn-lg btn-primary btn-block text-uppercase" type="submit">Sign in</Button>
                        <hr className="my-4" />
                        <Button className="btn btn-lg btn-google btn-block text-uppercase" type="submit"><FontAwesomeIcon icon={faFacebook} className=""/> Sign in with Google</Button>
                        <Button className="btn btn-lg btn-facebook btn-block text-uppercase" type="submit"><FontAwesomeIcon icon={faFacebook} className=""/>  Sign in with Facebook</Button>
                        </Form>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
      </Container>
    )
}
export default React.memo(FormLogin)