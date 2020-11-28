import React ,{useState , useEffect} from 'react'
import LayoutComponent from '../Components/Layout'
import FormLogin from '../Components/FormLogin'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link, Redirect
  } from "react-router-dom";
const IndexPage = () => {
    const [isLogin , SetLogin] = useState(false)
    const [valueEmail , setEmailValue] = useState("")
    const [valuePassword , setValuePassword] = useState("")
    const [error , setError] = useState("")
    const changeValue = (event) => {
        let name = event.target.name
        let value = event.target.value
        if(name === "email"){
            setEmailValue(value)
        }
        else if(name === "password"){
            setValuePassword(value)
        }
    }
    const submit = (event) => {
        event.preventDefault()
        if(!valueEmail && !valuePassword){
            setError("Khong duoc bo trong")
        }
        else {
            setError("")
            SetLogin(true)
            localStorage.setItem('token', Math.random() * 9999);
        }
    }
    const logout = () => {
        if(localStorage.getItem('login') === 'ok'){
            localStorage.setItem('login', '!ok');
            SetLogin(false)

        }
    }
    if(localStorage.getItem('login') == null && !isLogin) return <Redirect to="/admin/login"/>
    //  return <FormLogin error={error} valueEmail={valueEmail} valuePassword={valuePassword} email="email" changeInput={changeValue} password="password" submit={submit}/>
    return(
        <LayoutComponent>
            <h1>Layout</h1>
            <button onClick={logout}>Logout</button>
        </LayoutComponent>
    )
}
export default React.memo(IndexPage)
