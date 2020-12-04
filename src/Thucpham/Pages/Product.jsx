import React, {useEffect} from 'react'
import { Container , Row , Col } from 'react-bootstrap'
import LayoutComponent from '../Compomnents/Layout'
import NavRightComponent from '../Compomnents/NavRight'
import CarouselComponent from '../Compomnents/Carousel'
import TopProduct from '../ProductComponents/TopProduct'
import AOS from 'aos'
import 'aos/dist/aos.css'
import ProductComponent  from '../Compomnents/ProductComponent'
import ProductItem from '../ProductComponents/ProductItem'
import { useParams } from 'react-router-dom'

import * as api from '../Service/apiProduct'

import './index.css'

const ProductPage = () => {
    const product = useParams()

    const Data = ProductComponent(ProductItem , api.getData(product.name))
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
            <Data />
            <TopProduct/>
        </LayoutComponent>
    )
}
export default React.memo(ProductPage)