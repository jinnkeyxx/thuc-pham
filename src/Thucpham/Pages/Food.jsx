import React, {useEffect} from 'react'
import { Container , Row , Col } from 'react-bootstrap'
import LayoutComponent from '../Compomnents/Layout'
import NavRightComponent from '../Compomnents/NavRight'
import CarouselComponent from '../Compomnents/Carousel'
import TopProduct from '../ProductComponents/TopProduct'
import AOS from 'aos'
import 'aos/dist/aos.css'
import ProductComponent  from '../Compomnents/ProductComponent'
import FoodComponent from '../ProductComponents/Foot'
import { Food } from '../Service/Food'
import './index.css'

const FootPage = () => {
const DataFoot = ProductComponent(FoodComponent , Food)

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
            <DataFoot/>
            <TopProduct/>
        </LayoutComponent>
    )
}
export default React.memo(FootPage)