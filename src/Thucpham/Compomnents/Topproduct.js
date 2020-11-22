import React from 'react'
import { Container , Col , Card , Button} from 'react-bootstrap'
import ImgProduct from '../images/1.png'
const TopProduct = () => {
    return(

        <div className="hot my-5 ">
            <h2 className="text-center py-3" >Top Product</h2>
            <Container>
                <div className="hotoffer my-3">
                    <Card style={{ width: '17rem' }} className="my-3 wow fadeInUp" data-wow-delay="0.9s">
                        <Card.Img variant="top" src={ImgProduct} />
                        <Card.Body className="my-3">
                            <div className="offer">50%</div>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '17rem' }} className="my-3">
                        <Card.Img variant="top" src={ImgProduct}  />
                        <Card.Body className="my-3">
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '17rem' }} className="my-3">
                        <Card.Img variant="top" src={ImgProduct}  />
                        <Card.Body className="my-3">
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '17rem' }} className="my-3">
                        <Card.Img variant="top" src={ImgProduct} />
                        <Card.Body className="my-3">
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '17rem' }} className="my-3">
                        <Card.Img variant="top" src={ImgProduct} />
                        <Card.Body className="my-3">
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '17rem' }} className="my-3">
                        <Card.Img variant="top" src={ImgProduct} />
                        <Card.Body className="my-3">
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '17rem' }} className="my-3">
                        <Card.Img variant="top" src={ImgProduct} />
                        <Card.Body className="my-3">
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '17rem' }} className="my-3">
                        <Card.Img variant="top" src={ImgProduct} />
                        <Card.Body className="my-3">
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>

                    </div>
            </Container>


        </div>
    )
}
export default React.memo(TopProduct)
