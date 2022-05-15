import './Cards.css'
import niobio from '../../../Assets/img/Nióbio.svg'
import { Card } from 'react-bootstrap'
import { Button } from 'react-bootstrap'

function Cards() {
    return(
        <section>
            <Card  className="c" style={{ width: '18rem' }}>
                <Card.Img variant="top" src={niobio} />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
        </section>
    )
};

export default Cards