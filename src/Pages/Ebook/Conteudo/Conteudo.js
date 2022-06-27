import './Conteudo.css'
import { useState,useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

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
        <Link className='uuu' to='/ebook'>
            <h3>
                Voltar                
            </h3>
        </Link>
        <div className='ulo'>
        {ebook &&
        (
                <container key={ebook.id} className='d-flex justify-content-center'>
                    <div className='cnn'>
                            <h1>{ebook.name}</h1>
                            <br/>
                            <h3>
                               {ebook.texto}
                            </h3>
                    </div>
                </container>
                )
            }         
        </div>    
    </>
    )
};

export default Conteudo