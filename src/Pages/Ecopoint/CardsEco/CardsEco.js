import './CardsEco.css'
import { useEffect, useState} from 'react';
import { Card ,Button} from 'react-bootstrap'

const CardsEco = ()  => {
    const [eco, setEco] = useState(null);

    useEffect(() => {
        fetch("http://localhost/reverse--api/api/ecoponto/select-all")
        .then((response) => response.json())
        .then((data) => setEco(data));
    }, [])

    return(
        <>
        {eco &&
        eco.map((eco) => {
            return(
                <section className='tudo'>
                    <div key={eco.id} className='cont'>
                        <Card.Img  className='w-75 ii' variant="top" src={eco.photo} alt='Ebooks'/>
                        <Card.Body>
                            <Card.Title>{eco.name}</Card.Title>
                            <Card.Text>
                            {eco.number}
                            <br/>
                            {eco.adress}
                            <br/>
                            N°
                            {eco.numero}
                            </Card.Text>
                            <Button  href={eco.localizacao} variant="primary">Localizar</Button>
                        </Card.Body>
                    </div>
                </section>
            )
        })}
        </>
    )
};

export default CardsEco