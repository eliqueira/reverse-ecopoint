import './Cards.css'
import niobio from '../../../Assets/img/Nióbio.svg'
import { Card, CardGroup } from 'react-bootstrap'
import { Button } from 'react-bootstrap'

function Cards() {
    return(
        <section className='car'>
                <CardGroup >
                    <Card className='p-3' style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={niobio} />
                        <Card.Body className='bg-white'>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>

                    <Card className='p-3' style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={niobio} />
                        <Card.Body className='bg-white'>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>

                    <Card className='p-3' style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={niobio} />
                        <Card.Body className='bg-white'>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>                    
                </CardGroup>
        </section>
    )
};

export default Cards