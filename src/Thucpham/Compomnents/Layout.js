import React from 'react'
import HeaderComponent from './Header'
import FooterComponent from './Footer'
import ContentComponent from './Content'
import InfoProductComponent from './InfoProduct'
import NavRightComponent from './NavRight'
import './Layout.css'
const LayoutComponent = () => {
    return(
        <>
            <HeaderComponent></HeaderComponent>
            <InfoProductComponent></InfoProductComponent>
            <NavRightComponent></NavRightComponent>
            <ContentComponent></ContentComponent>
            <FooterComponent></FooterComponent>
        </>
    )
}
export default React.memo(LayoutComponent)
