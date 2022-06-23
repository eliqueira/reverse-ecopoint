import './Cards.css'
import niobio from '../../../Assets/img/Nióbio.svg'
import { useEffect, useState} from 'react';
// import { Card, CardGroup } from 'react-bootstrap'
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
                <container key={ebook.id} className='d-flex justify-content-center'>
                    <div className='cardin'>
                            <img src={ebook.photo} alt='niobio imagem'/>
                            <h1>{ebook.name}</h1>
                            <br/>
                            <h3>
                               {ebook.descricao}
                            </h3>
                            <button className='bots'>
                                Ler
                            </button>
                    </div>
                </container>
                )
            })}         
            </>
    )
};


export default Cards