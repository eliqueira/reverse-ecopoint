import './Ebk.css'
import { Link, useParams } from 'react-router-dom'
import {useEffect, useState} from 'react'


const Ebk = () => {
    
    const {ebookId} =useParams();
    const [ebook, setEbook] = useState(null);

    useEffect(() => {
        fetch("http://localhost/reverse--api/api/ebook/select-all")
        .then((response) => response.json())
        .then((data) => setEbook(data));
    }, [ebookId])

    return(
        <>
        <div className="e">
            <h1>E-BOOKS</h1>
            <Link className='bk' to="ebook">
                <h5>Ver todos</h5>
            </Link>
        {ebook &&
        ebook.map((ebook) =>{
            return (
             <div  key={ebook.id} className='b p-3'>
                <div className='bb'>
                    <div className='be'>
                        <h4>{ebook.name}</h4>
                        <h5>                        
                            {ebook.descricao}
                        </h5>
                        <div className='bi'>
                            <Link className='bo' to={"/conteudo/"+ebook.id}>
                                <h3>Ler</h3>                        
                            </Link>
                        </div>
                    </div>
                    <img src={ebook.photo} alt="niobio"/>
                </div>
            </div>
            )
        })}
        </div>
        {/* <section> */}
        {/* </section> */}
        </>
    )
};

export default Ebk