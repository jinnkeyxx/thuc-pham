import React, {useEffect , useState} from 'react'
// import WOW from 'wowjs'

import LayoutComponent from '../Compomnents/Layout'
import NavRightComponent from '../Compomnents/NavRight'
import CarouselComponent from '../Compomnents/Carousel'
import HotofferComponent from '../Compomnents/HotOffer'
import TopProduct from '../Compomnents/Topproduct'
import AOS from 'aos'
import 'aos/dist/aos.css'


import './index.css'
const IndexPage = () => {
    useEffect(() => {
        AOS.init({duration : 2000});
    }, [])
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