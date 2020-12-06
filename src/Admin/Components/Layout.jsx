import React from 'react'
import HeaderComponent from './Header'
import FooterComponent from './Footer'
import './css/layout.css'
const LayoutComponent = () => {
    return(
        <>
            <HeaderComponent/>
                <h1>layout</h1>
            <FooterComponent/>
        </>
    )
}
export default React.memo(LayoutComponent)