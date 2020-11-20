import React from 'react'
import HeaderComponent from './Header'
import FooterComponent from './Footer'
import InfoProductComponent from './InfoProduct'

import './Layout.css'

const LayoutComponent = (props) => {
    return(
        <>
            <HeaderComponent></HeaderComponent>
            <InfoProductComponent></InfoProductComponent>
            {props.children}
            <FooterComponent></FooterComponent>
        </>
    )
}
export default React.memo(LayoutComponent)
