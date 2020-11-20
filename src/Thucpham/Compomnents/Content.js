import React from 'react'
import { Container , Row , Col , Card , Button} from 'react-bootstrap'
const ContentComponent = () => {
    return(
        <div className="hot my-5 ">
            <h2 className="text-center py-5" >Hot Offer</h2>
            <div className="hotoffer">
                <Card style={{ width: '17rem' }} className="my-3">
                    <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body>
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
                    <Card.Img variant="top" src="holder.js/100px180"  />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>
                <Card style={{ width: '17rem' }} className="my-3">
                    <Card.Img variant="top" src="holder.js/100px180"  />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>
                <Card style={{ width: '17rem' }} className="my-3">
                    <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>

            </div>
        </div>
    )
}
export default React.memo(ContentComponent)
