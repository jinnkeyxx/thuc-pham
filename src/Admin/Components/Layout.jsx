import React from 'react'
import HeaderComponent from './Header'
import FooterComponent from './Footer'
<<<<<<< HEAD
const LayoutComponent = (props) => {
    return(
        <>
            <HeaderComponent/>
            {props.children}
=======
const LayoutComponent = () => {
    return(
        <>
            <HeaderComponent/>
                <h1>layout</h1>
>>>>>>> eed76c24510080ab0733d4129fe2f2989feed74f
            <FooterComponent/>
        </>
    )
}
export default React.memo(LayoutComponent)