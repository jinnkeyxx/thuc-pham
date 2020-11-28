import React from 'react'
import HeaderComponent from './Header'
import FooterComponent from './Footer'
const LayoutComponent = (props) => {
    return(
        <>
            <HeaderComponent/>
            {props.children}
            <FooterComponent/>
        </>
    )
}
export default React.memo(LayoutComponent)