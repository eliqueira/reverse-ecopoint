import './Conteudo.css'
import { useState,useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Conteudo = () => {
    const {ebookId} = useParams();
    const [ebook, setEbook] = useState();

    useEffect(() => {
        fetch("http://localhost/reverse--api/api/ebook/select-by-id/?id="+ebookId)
        .then((response) => response.json())
        .then((data) => setEbook(data));
    }, [])
    return(
        <>
        {ebook &&
        (
                <container key={ebook.id} className='d-flex justify-content-center'>
                    <div>
                            <img src={ebook.photo} alt='niobio imagem'/>
                            <h1>{ebook.name}</h1>
                            <br/>
                            <h3>
                               {ebook.texto}
                            </h3>
                    </div>
                </container>
                )
            }         
            </>
    )
};

export default Conteudo