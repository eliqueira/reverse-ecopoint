import './Cards.css'
import { useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
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
            <section className='uoi'>
                <div key={ebook.id} className='ct'>
                    <img className='www' variant="top" src={ebook.photo} alt='Ebooks'/>
                    <div className='cta'>
                        <h3>{ebook.name}</h3>
                        <h5>
                        {ebook.descricao}
                        </h5>
                        <Link className='boi' to={"/conteudo/"+ebook.id}>
                            <h3>
                                Ler                                
                            </h3>
                        </Link>
                    </div>
                </div>
            </section>
                )
            })}         
            </>
    )
};


export default Cards