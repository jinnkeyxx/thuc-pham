import React , {useState , useEffect} from 'react'
// import {apiFake , totalItem , titleProduct} from '../dataFake/HotOffer'
import { Container , Card , Button} from 'react-bootstrap'
import Lightbox from "react-awesome-lightbox";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faShoppingCart} from '@fortawesome/free-solid-svg-icons'
import "react-awesome-lightbox/build/style.css";
import LoadingComponent from '../Compomnents/Loading'
import ImgHotOffer from '../images/offer.png'
import Pagination from '../Compomnents/Pagination'
// import {HotOffer} from '../Service/HotOffer'

// --------- import api server ----------------
// import {  totalItem , titleProduct } from '../dataFake/HotOffer'
const Product = (props) => {
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
    const changPage = (pageNumber) => {
        SetPageData(pageNumber)
        setPageActive(pageNumber)
    }

    useEffect(() => {
        const loadData = async () => {
            const data = await props.data.getData(pageData , limitPage)
            await setLoading(true)
            await setDataProduct(data.data)
            await setTotalItemPgae(data.totalItem)
            await setTitleProduct(data.titleProduct)
            await setLoading(false)
        }
        loadData()
    }, [pageData]);
   // -------------------- Call Api Server --------------------------

    // useEffect(() => {
    //     const loadData = async () => {
    //         const data = await props.data.getData(pageData , limitPage)
    //         await setLoading(true)
    //         await setDataProduct(data)
<<<<<<< HEAD
    //         // await setTotalItemPgae(props.totalItem)
    //         // await setTitleProduct(props.titleProduct)
=======
    //         await setTotalItemPgae(totalItem)
    //         await setTitleProduct(titleProduct)
>>>>>>> eed76c24510080ab0733d4129fe2f2989feed74f
    //         await setLoading(false)
    //     }
    //     loadData()
    // }, [pageData]);
    // ------------------- Call data fake -------------------

    // ------------------- end Cal api useEffect , use 1 or 2 lycel -----------------

    if(!isLoading && dataProduct.length <= 0) return <> <LoadingComponent/></>
    return(
        <div className="hot my-5">
            <h2 className="text-center py-3 my-3">{props.Product}</h2>
            <Container>
                <div className="hotoffer my-3" >
                    {
                        dataProduct.map((item , index) => (
                            <Card style={{ width: '17rem' }} className="mt-3" data-aos="fade-right" key={item._id}>
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
                    {show && (<Lightbox image={image} title={titleImage} onClose={ () => showImage(image , titleImage)}/>)}
                </div>
                <Pagination changePage={changPage} activePage={pageActive} perPage={limitPage} totalItem={toTalItemPage}/>
            </Container>
        </div>
    )
}
export default React.memo(Product)
