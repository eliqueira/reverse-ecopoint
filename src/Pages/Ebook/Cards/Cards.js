import './Cards.css'
import { useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap'
// import { Button } from 'react-bootstrap'

const Cards = () => {
    const [ebook, setEbook] = useState(null);

    useEffect(() => {
        fetch("http://localhost/reverse--api/api/ebook/select-all")
        .then((response) => response.json())
        .then((data) => setEbook(data));
    }, [])

    return(
        <>
        {ebook &&
        ebook.map((ebook) => {
            return(
                <section className='tudo'>
                <div key={ebook.id} className='cont'>
                    <Card.Img  className='w-75' variant="top" src={ebook.photo} alt='Ebooks'/>
                    <Card.Body>
                        <Card.Title>{ebook.name}</Card.Title>
                        <Card.Text>
                        {ebook.descricao}
                        </Card.Text>
                        <Link to={"/conteudo/"+ebook.id}>
                            <h3>
                                Ler                                
                            </h3>
                        </Link>
                    </Card.Body>
                </div>
            </section>
                )
            })}         
            </>
    )
};


export default Cards