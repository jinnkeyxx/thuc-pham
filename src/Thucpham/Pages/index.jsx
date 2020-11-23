import React, {useEffect} from 'react'
// import WOW from 'wowjs'

import LayoutComponent from '../Compomnents/Layout'
import NavRightComponent from '../Compomnents/NavRight'
import CarouselComponent from '../Compomnents/Carousel'
import HotofferComponent from '../ProductComponents/HotOffer'
import TopProduct from '../ProductComponents/TopProduct'
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