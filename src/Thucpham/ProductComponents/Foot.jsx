import React , {useState , useEffect} from 'react'
import { Container , Card , Button} from 'react-bootstrap'
import Lightbox from "react-awesome-lightbox";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faShoppingCart} from '@fortawesome/free-solid-svg-icons'
import "react-awesome-lightbox/build/style.css";
import LoadingComponent from '../Compomnents/Loading'
import ImgHotOffer from '../images/offer.png'
import {apiFake , totalItem , titleProduct} from '../dataFake/HotOffer'

// import {HotOffer} from '../Service/HotOffer'
// --------- import api server ----------------
import Pagination from '../Compomnents/Pagination'
const HotofferComponent = () => {
    const [show , setShow] = useState(false)
    const [image , setImage] = useState('')
    const [titleImage , setTitleImage] = useState('')
    const [dataHotOffer , setDataHotOffer] = useState([])
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
    const changPage = (pageNumber) => {
        SetPageData(pageNumber)
        setPageActive(pageNumber)
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
            await setDataHotOffer(data)
            await setTotalItemPgae(totalItem)
            await setTitleProduct(titleProduct)
            await setLoading(false)
        }
        loadData()
    }, [pageData]);
    // ---------------------- Call Api Fake --------------------------


    // ----------------------- end Cal api useEffect , use 1 or 2 lycel -----------------

    if(show) return  <Lightbox image={image} title={titleImage} onClose={ () => showImage(image , titleImage)}/>
    if(!isLoading && dataHotOffer.length <= 0) return <> <h2 className="text-center py-3 " >{titleProduct}</h2><LoadingComponent/></>
    return(
        <div className="hot my-5 ">
            <h2 className="text-center py-3 " >{Product}</h2>
            <Container>
                <div className="hotoffer my-3" >
                    {
                        dataHotOffer.map((item , index) => (
                            <Card style={{ width: '17rem' }} className="mt-5 " data-aos="fade-up" key={item._id}>
                            {item.is_offer && (<div className="img_offer"><img src={ImgHotOffer} alt="product"/></div>)}
                            <div className="card-boddy">
                                <Card.Img variant="top" src={item.image} onClick={() => showImage(item.image , item.title)} />
                                <Card.Body className="mt-2">
                                    {item.discount > 0 && (<div className="offer">{item.discount}%</div>)}
                                    <Card.Title className="my-2">
                                        {item.title}
                                        {item.discount > 0 && (<h4 className="">{item.newPrice}$ &nbsp;<del> {item.oldPrice}$</del></h4>)}
                                        {item.discount <= 0 && (<h4 className="">{item.newPrice}$</h4>)}
                                    </Card.Title>
                                    <Button variant="danger" className="add_cart mx-1" onClick={() => showImage(item.image , item.title)}>View <FontAwesomeIcon icon={faEye}/></Button>
                                    <Button variant="danger" className="add_cart">Buy <FontAwesomeIcon icon={faShoppingCart}/> </Button>
                                </Card.Body>
                            </div>
                            </Card>
                        ))
                    }
                </div>
                <Pagination changePage={changPage} activePage={pageActive} perPage={limitPage} totalItem={toTalItemPage}/>
            </Container>
        </div>
    )
}
export default React.memo(HotofferComponent)
