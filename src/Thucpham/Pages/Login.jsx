import React , { useEffect , useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook }  from '@fortawesome/free-brands-svg-icons'
import Loading from '../Compomnents/Loading'
import {Container , Row , Col , Form , Button ,Card} from 'react-bootstrap'
import * as api from '../Service/Login'
import * as helper from '../Helper/Common'
import '../Compomnents/css/Layout.css'
import { useHistory } from "react-router-dom";

const FormLogin = () => {
    const history = useHistory();
    useEffect(() => {
        document.title = 'login'
    }, [])
    const [valueEmail , setValueEmail] = useState("")
    const [valuePassword , setValuePassword] = useState("")
    const [error , setErrorForm] = useState("")
    const [isLoading , setLoading] = useState(false)
    const submitForm = async (event) => {
        event.preventDefault()
        let obj = {}
        await setLoading(true)
        const data = await api.sendPostData({username : valueEmail , password: valuePassword})
        if(!helper.isEmptyObj(data)){
            if(data.status === true){
                setLoading(false)
                setErrorForm(data.messages)
                api.saveToken(data.token)
                if(api.getRole() === '1'){
                    window.location.reload()
                }
                else {
                    window.location.reload()
                }
            }
            else {
                setLoading(false)
                setErrorForm(data.messages)
            }
        }
        else {
            await setLoading(false)
            await setErrorForm(data.messages)
        }
    }
    const changeInput = (event) => {
        let name = event.target.name
        let value = event.target.value
        if(name === "email") setValueEmail(value)
        if(name === "password") setValuePassword(value)
    }
    return(
        <Container>
            <Row className="justify-content-md-center">
            <Col sm={9} md={7} lg={5}>
                <Card className="card-signin my-5">
                    <Card.Body>
                        <Card.Title className="text-center">Sign In</Card.Title>
                            {error !== "" && ( <p className="text-danger">{error}</p>)}
                        <Form className="form-signin" onSubmit={submitForm}>
                        <Form.Group className="form-label-group">
                            <Form.Control type="text" id="inputEmail" name="email" value={valueEmail} onChange={changeInput} className="form-control" placeholder="Email address"   />
                            <Form.Label htmlFor="inputEmail">Email address</Form.Label>
                        </Form.Group>
                        <Form.Group className="form-label-group">
                            <Form.Control type="password" id="inputPassword" name="password" value={valuePassword} onChange={changeInput} className="form-control" placeholder="Password"  />
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
                        {isLoading && (<Loading/>)}
                    </Card.Body>
                </Card>
            </Col>
        </Row>
      </Container>
    )
}
export default React.memo(FormLogin)