import React, {useEffect} from 'react'
import { Container , Row , Col } from 'react-bootstrap'
import LayoutComponent from '../Compomnents/Layout'
import NavRightComponent from '../Compomnents/NavRight'
import CarouselComponent from '../Compomnents/Carousel'
import TopProduct from '../ProductComponents/TopProduct'
import AOS from 'aos'
import 'aos/dist/aos.css'
import ProductComponent  from '../Compomnents/ProductComponent'
import HotOfferComponent from '../ProductComponents/HotOffer'
// import { HotOffer } from '../dataFake/HotOffer'
<<<<<<< HEAD
import { HotOffer } from '../Service/HotOffer'

=======
 import { HotOffer } from '../Service/HotOffer'
>>>>>>> eed76c24510080ab0733d4129fe2f2989feed74f
import './index.css'

const IndexPage = () => {
const DataHotOffer = ProductComponent(HotOfferComponent , HotOffer)

    useEffect(() => {
        AOS.init({duration : 2000});
    }, [])
    return(
        <LayoutComponent>
            <Container fluid>
                <Row>
                    <Col md={3} lg={3}>
                        <NavRightComponent/>
                    </Col>
                    <Col>
                        <CarouselComponent/>
                    </Col>
                </Row>
            </Container>
            <DataHotOffer Product="Hot Offer"/>
            <TopProduct/>
        </LayoutComponent>
    )
}
export default React.memo(IndexPage)