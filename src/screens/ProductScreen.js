import products from '../products'
import { Link, useParams } from 'react-router-dom';
import { Button, Card, Col, Image, ListGroup, ListGroupItem, Row } from 'react-bootstrap'
import Rating from '../components/Rating'


const ProductScreen = () => {
    const { id } = useParams()
    const product = products.find(pro => pro._id == id)
    return (
        <>
            <Link className='btn btn-light my-3' to='/'>Go Back</Link>
            <Row>
                <Col md={6}>
                    <Image src={product.image} alt={product.name} fluid />
                </Col>

                <Col md={3}>
                    <ListGroup variant='flush'>
                        <ListGroupItem><h3>{product.name}</h3></ListGroupItem>
                        <ListGroupItem><Rating value={product.rating} text={`${product.numReviews} reviews`} /></ListGroupItem>
                        <ListGroupItem>Price: ${product.price}</ListGroupItem>
                        <ListGroupItem>Description: {product.description}</ListGroupItem>
                    </ListGroup>
                </Col>
                <Col md={3}>
                    <Card >
                        <ListGroup variant='flush'>
                            <ListGroupItem>
                                <Row>
                                    <Col>Price:</Col>
                                    <Col><strong>${product.price}</strong></Col>
                                </Row>
                            </ListGroupItem>
                            <ListGroupItem>
                                <Row>
                                    <Col>Status:</Col>
                                    <Col>{product.countInStock ? "In Stock" : "Out Of Stock"}</Col>
                                </Row>
                            </ListGroupItem>
                            <ListGroupItem>
                                <Button 
                                className='mx-auto' 
                                style={{ display: "block",width:"85%" }} 
                                type='button'
                                disabled={product.countInStock===0}
                                >Add To Cart</Button>
                            </ListGroupItem>
                        </ListGroup>
                    </Card>
                </Col>
            </Row>
        </>
    )
}

export default ProductScreen