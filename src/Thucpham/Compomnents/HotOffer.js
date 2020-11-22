import React , {useState , useEffect} from 'react'
import { Container , Card , Button} from 'react-bootstrap'
import Lightbox from "react-awesome-lightbox";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faShoppingCart} from '@fortawesome/free-solid-svg-icons'
import "react-awesome-lightbox/build/style.css";
import LoadingComponent from './Loading'
import ImgHotOffer from '../images/offer.png'
import { data } from '../dataFake/HotOffer'

const HotofferComponent = () => {

    const [show , setShow] = useState(false)
    const [image , setImage] = useState('')
    const [titleImage , setTitleImage] = useState('')
    const [dataHotOffer , setDataHotOffer] = useState([])
    const [isLoading , setLoading] = useState(false)
    const offerProduct = <h2 className="text-center py-3 " >Hot Offer</h2>
    const showImage = (img ,title) => {
        show ? setShow(false) : setShow(true)
        image === "" ? setImage(img) : setImage('')
        titleImage === "" ? setTitleImage(title) : setTitleImage('')
    }
    useEffect(() => {
        const loadData = async () => {
            await setLoading(true)
            await setDataHotOffer(data)
            await setLoading(false)
        }
        loadData()
    }, []);
    if(show) return  <Lightbox image={image} title={titleImage} onClose={ () => showImage(image , titleImage)}/>
    if(!isLoading && dataHotOffer.length <= 0) return <> {offerProduct}<LoadingComponent/></>
    return(
        <div className="hot my-5 ">
            {offerProduct}
            <Container>
                <div className="hotoffer my-3" >
                    {
                        dataHotOffer.map((item , index) => (
                            <Card style={{ width: '17rem' }} className="mt-5 " data-aos="fade-up" >
                            <div className="img_offer">
                                <img src={ImgHotOffer} alt="product"/>
                            </div>
                            <div className="card-boddy">
                                <Card.Img variant="top" src={item.image} onClick={() => showImage(item.image , item.title)} />
                                <Card.Body className="mt-2">
                                    <div className="offer">{item.discount}%</div>
                                    <Card.Title className="mt-3">{item.title}</Card.Title>
                                        <h4>{item.newPrice}$</h4>
                                        <h4><del>{item.oldPrice}$</del></h4>
                                    <Button variant="success" className="add_cart mx-1" onClick={() => showImage(item.image , item.title)}>View <FontAwesomeIcon icon={faEye}/></Button>
                                    <Button variant="success" className="add_cart">Buy <FontAwesomeIcon icon={faShoppingCart}/> </Button>
                                </Card.Body>
                            </div>
                            </Card>

                        ))
                    }
                </div>
            </Container>
        </div>
    )
}
export default React.memo(HotofferComponent)
