import React from 'react'
import HeaderComponent from './Header'
import FooterComponent from './Footer'
import InfoProductComponent from './InfoProduct'
import './css/Layout.css'
const LayoutComponent = (props) => {
    return(
        <>
            <HeaderComponent/>
            <InfoProductComponent/>
            {props.children}
            <FooterComponent/>
        </>
    )
}
export default React.memo(LayoutComponent)
