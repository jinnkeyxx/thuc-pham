import React, {useEffect} from 'react'
import { Container , Row , Col } from 'react-bootstrap'
import LayoutComponent from '../Compomnents/Layout'
import NavRightComponent from '../Compomnents/NavRight'
import CarouselComponent from '../Compomnents/Carousel'
import TopProduct from '../ProductComponents/TopProduct'
import AOS from 'aos'
import 'aos/dist/aos.css'
import ProductComponent  from '../Compomnents/ProductComponent'
import FootComponent from '../ProductComponents/Foot'
import { Foot , totalItem , titleProduct } from '../dataFake/Foot'
import './index.css'

const FootPage = () => {
const DataFoot = ProductComponent(FootComponent , Foot)

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
            <DataFoot Product={titleProduct}/>
            <TopProduct/>
        </LayoutComponent>
    )
}
export default React.memo(FootPage)