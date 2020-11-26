import React , {useState , useEffect} from 'react'
import { Container , Card , Col , Row } from 'react-bootstrap'
import {apiFake , totalItem , titleProduct} from '../dataFake/TopProduct'
import Pagination from '../Compomnents/Pagination'
import LoadingComponent from '../Compomnents/Loading'
import NavRightComponent from '../Compomnents/NavRight'

// --------- import api server ----------------
const TopProduct = () =>{
    const [dataProduct , setDataProduct] = useState([])
    const [isLoading , setLoading] = useState(false)
    const [pageData , SetPageData] = useState(1)
    const [pageActive , setPageActive] = useState(1)
    // const [limitPage , setLimitPage] = useState(4)
    const [Product , setTitleProduct] = useState("")
    const [toTalItemPage , setTotalItemPgae ] = useState(0)
    const limitPage = 4

    // useEffect(() => {
    //     const loadData = async () => {
    //         const data = await HotOffer.getData(pageData , limitPage)
    //         await setLoading(true)
    //         await setDataHotOffer(data.data)
    //         await setTotalItemPgae(data.totalItem)
    //         await setTitleProduct(data.titleProduct)

    //         await setLoading(false)
    //     }
    //     loadData()
    // }, [pageData]);
    // -------------------- Call Api Server --------------------------
    useEffect(() => {
        const loadData = async () => {
            const data = await apiFake.getData(pageData , limitPage)
            await setLoading(true)
            await setDataProduct(data)
            await setTotalItemPgae(totalItem)
            await setTitleProduct(titleProduct)
            await setLoading(false)
        }
        loadData()
    }, [pageData]);
    // ---------------------- Call Api Fake --------------------------


    // ----------------------- end Cal api useEffect , use 1 or 2 method -----------------
    const changPage = (pageNumber) => {
        SetPageData(pageNumber)
        setPageActive(pageNumber)
    }
    if(!isLoading && dataProduct.length <= 0) return <> <LoadingComponent/></>
    return(
        <>
            <Container fluid className="TopProduct p-3 my-5">
            <h2 className="text-center mb-4 py-3">{Product}</h2>
            <Container className="TopProduct_wrap mt-3">
                   <Row>
                        <Col md={3}>
                            <NavRightComponent/>
                        </Col>
                        <Col className="">
                            <Row>
                                {dataProduct.map((item , index) => (
                                    <Card  className="mb-4 imgProduct" key={item._id} data-aos="fade-right">
                                        <Card.Img variant="top" src={item.image} />
                                        <Card.Title className="titleProduct"></Card.Title>
                                        <p><button className="button" type="button" data-hover="Show Now" data-active="I'M ACTIVE"><a href={item.href}><span>{item.title} </span></a></button></p>
                                    </Card>
                                ))}
                            </Row>
                        </Col>
                   </Row>
                   <Pagination changePage={changPage}  activePage={pageActive} perPage={limitPage} totalItem={toTalItemPage}/>
               </Container>
            </Container>
        </>
    )
}
export default React.memo(TopProduct)