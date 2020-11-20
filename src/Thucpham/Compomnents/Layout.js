import React from 'react'
import HeaderComponent from './Header'
import FooterComponent from './Footer'
import ContentComponent from './Content'
import InfoProductComponent from './InfoProduct'
import NavRightComponent from './NavRight'
import CarouselComponent from './Carousel'
import './Layout.css'
import "./layout.less"
const LayoutComponent = () => {
    return(
        <>
            <HeaderComponent></HeaderComponent>
            <InfoProductComponent></InfoProductComponent>
            <NavRightComponent><CarouselComponent></CarouselComponent></NavRightComponent>
            <ContentComponent></ContentComponent>
            <FooterComponent></FooterComponent>
        </>
    )
}
export default React.memo(LayoutComponent)
