import React , {useState , useEffect} from 'react'
import { Container , Card , Button , Col , Row , ListGroup} from 'react-bootstrap'
import ImgProduct from '../images/11.jpg'
import {apiFake , totalItem , titleProduct} from '../dataFake/TopProduct'
import Pagination from '../Compomnents/Pagination'
import LoadingComponent from '../Compomnents/Loading'
import Lightbox from "react-awesome-lightbox";

const TopProduct = () =>{
    const [show , setShow] = useState(false)
    const [image , setImage] = useState('')
    const [titleImage , setTitleImage] = useState('')
    const [dataProduct , setDataProduct] = useState([])
    const [isLoading , setLoading] = useState(false)
    const [pageData , SetPageData] = useState(1)
    const [pageActive , setPageActive] = useState(1)
    // const [limitPage , setLimitPage] = useState(4)
    const [Product , setTitleProduct] = useState("")
    const [toTalItemPage , setTotalItemPgae ] = useState(0)
    const limitPage = 4
    const showImage = (img ,title) => {
        show ? setShow(false) : setShow(true)
        image === "" ? setImage(img) : setImage('')
        titleImage === "" ? setTitleImage(title) : setTitleImage('')
    }
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
    const changPage = (pageNumber) => {
        SetPageData(pageNumber)
        setPageActive(pageNumber)
    }
    if(show) return  <Lightbox image={image} title={titleImage} onClose={ () => showImage(image , titleImage)}/>
    if(!isLoading && dataProduct.length <= 0) return <> <h2 className="text-center py-3 " >{titleProduct}</h2><LoadingComponent/></>
    return(
        <>
            <h2 className="text-center my-3 py-3">{Product}</h2>

            <Container className="TopProduct p-3 my-5">
               <div className="TopProduct_wrap">
                   <Row>
                        <Col md={3}>

                                <ListGroup>
                                    <ListGroup.Item>Cras justo odio</ListGroup.Item>
                                    <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                                    <ListGroup.Item>Morbi leo risus</ListGroup.Item>
                                    <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
                                    <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                                </ListGroup>
                        </Col>
                        <Col>
                            <Row>
                                {dataProduct.map((item , index) => (
                                    <Card  className="my-4 imgProduct" key={item._id}>
                                        <Card.Img variant="top" src={item.image} onClick={() => showImage(item.image , item.title)}/>
                                        <Card.Title className="titleProduct"></Card.Title>
                                <p>{item.title}</p>
                                    </Card>
                                ))}
                            </Row>
                        </Col>
                   </Row>
                   <Pagination changePage={changPage}  activePage={pageActive} perPage={limitPage} totalItem={toTalItemPage}/>
               </div>
            </Container>
        </>
    )
}
export default React.memo(TopProduct)