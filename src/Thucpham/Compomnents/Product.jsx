import React , {useState , useEffect} from 'react'
import { Container , Card , Button} from 'react-bootstrap'
import Lightbox from "react-awesome-lightbox";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faShoppingCart} from '@fortawesome/free-solid-svg-icons'
import "react-awesome-lightbox/build/style.css";
import LoadingComponent from '../Compomnents/Loading'
import Pagination from '../Compomnents/Pagination'
import * as api from '../Service/apiProduct'
const Product = (props) => {

    const [show , setShow] = useState(false)
    const [image , setImage] = useState('')
    const [titleImage , setTitleImage] = useState('')
    const [dataProduct , setDataProduct] = useState([])
    const [isLoading , setLoading] = useState(false)
    const [pageData , SetPageData] = useState(1)
    const [pageActive , setPageActive] = useState(1)
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
            await setLoading(true)
            const data  = await props.data
            if(data.data.length <= 0) setDataProduct([])
            await setDataProduct(api.PaginationData( data.data , pageData , limitPage ))
            await setTotalItemPgae(data.totalItem)
            await setTitleProduct(data.title)
            await setLoading(false)
        }
        loadData()
    }, [pageData]);

    if(!isLoading && dataProduct.length <= 0) return <> <LoadingComponent/></>
    return(
        <div className="hot my-5">
            <h2 className="text-center py-3 my-3">{Product}</h2>
            <Container>
                <div className="hotoffer my-3" >
                    {
                        dataProduct.map((item , index) => (

                            <Card style={{ width: '17rem' }} className="mt-3" data-aos="fade-right" key={index}>
                            {item.is_offer && (<div className="img_offer"><img src={item.image} alt="product"/></div>)}
                            <div className="card-boddy">
                                <Card.Img variant="top" src={item.image} onClick={() => showImage(item.image , item.name)} />
                                <Card.Body className="mt-2">
                                    {item.discount > 0 && (<div className="offer">{item.discount}%</div>)}
                                    <Card.Title className="my-2">
                                        {item.name}
                                        {item.discount > 0 ? (<h4 className="">{item.price}$ &nbsp;<del> {item.price}$</del></h4>) : (<h4 className="">{item.price}$</h4>)}
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
