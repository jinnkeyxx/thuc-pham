import React from 'react'
import LayoutComponent from '../Compomnents/Layout'
import NavRightComponent from '../Compomnents/NavRight'
import CarouselComponent from '../Compomnents/Carousel'
import HotofferComponent from '../Compomnents/HotOffer'
import TopProduct from '../Compomnents/Topproduct'
import './index.css'
const IndexPage = () => {
    return(
        <LayoutComponent>
            <NavRightComponent>
                <CarouselComponent/>
            </NavRightComponent>
        <HotofferComponent/>
        <TopProduct/>
        </LayoutComponent>
    )
}
export default React.memo(IndexPage)