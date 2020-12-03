import React , {useState , useEffect} from 'react'
import { Container , Card , Col , Row } from 'react-bootstrap'
import { api } from '../Service/apiProduct'
import Pagination from '../Compomnents/Pagination'
import LoadingComponent from '../Compomnents/Loading'
import NavRightComponent from '../Compomnents/NavRight'
const TopProduct = () =>{
    const [dataProduct , setDataProduct] = useState([])
    const [isLoading , setLoading] = useState(false)
    const [pageData , SetPageData] = useState(1)
    const [pageActive , setPageActive] = useState(1)
    const [Product , setTitleProduct] = useState("")
    const [toTalItemPage , setTotalItemPgae ] = useState(0)
    const limitPage = 4
    const PaginationData = ( data , page , limit) => {
        const startIndex = (page - 1) * limit
        const endIndex = page * limit
        const result = data.slice(startIndex , endIndex)
        return result
    }
    useEffect(() => {
        const loadData = async () => {
            await setLoading(true)
            const data = await api.getData('topproduct')
            if(data.data.length <= 0) setDataProduct([])
            await setDataProduct(PaginationData(data.data , pageData , limitPage))
            await setTotalItemPgae(data.totalItem)
            await setTitleProduct(data.title)
            await setLoading(false)
        }
        loadData()
    }, [pageData]);
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
                                    <Card  className="mb-4 imgProduct" key={item.id} data-aos="fade-right">
                                        <Card.Img variant="top" src={item.image} />
                                        <Card.Title className="titleProduct"></Card.Title>
                                        <p><button className="button" type="button" data-hover="Show Now" data-active="I'M ACTIVE"><a href={item.href}><span>{item.name} </span></a></button></p>
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